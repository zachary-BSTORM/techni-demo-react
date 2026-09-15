import { useActionState, useState } from "react";
import type { Pokemon } from "./models/tyradex.model";

const PAR_PAGE = 30;

function ConsomationApi() {
    const [page, setPage] = useState(1);
    const [id, setId] = useState(-1);

    // methode pour le useActionState List Pokemon
    async function getData(): Promise<Pokemon[]> {
        const response = await fetch("https://tyradex.app/api/v1/pokemon");
        return await response.json();
    }

    // methode pour le useActionState Details pokemon
    async function getDetails(previous: Pokemon | null, idPokemon: number): Promise<Pokemon> {
        const response = await fetch(`https://tyradex.app/api/v1/pokemon/${idPokemon}`);
        return await response.json();
    }

    // liste pokemon
    const [data, actionGetData, isPendingList] = useActionState(getData, null);
    
    // detail pokemon ( ici la liste est déja chargé la requette est pour l'exemple)
    const [details, actionGetDetails, isPendingDetails] = useActionState(getDetails, null);

    // pagination
    const totalPages = data ? Math.ceil(data.length / PAR_PAGE) : 0;
    const debut = (page - 1) * PAR_PAGE;
    const pokemonsAffiches = data ? data.slice(debut, debut + PAR_PAGE) : [];

    // affichage de la modal
    function ouvrirDetails(idPokemon: number) {
        setId(idPokemon);
        actionGetDetails(idPokemon);
    }

    return (
        <div className="card p-3">
            <h2>Pokemons</h2>

            <form action={actionGetData}>
                <button type="submit" className="btn btn-primary" disabled={isPendingList}>
                    {isPendingList ? "Chargement . . ." : "Charger les Pokémon"}
                </button>
            </form>

            <div className="d-flex gap-3 align-items-start">
                {data && (
                    <div className="flex-grow-1">
                        <ul className="list-group my-3">
                            <ListPokemon pokemons={pokemonsAffiches} onSelect={ouvrirDetails} />
                        </ul>

                        <div className="d-flex justify-content-center align-items-center gap-3">
                            <button className="btn btn-outline-primary" disabled={page <= 1}
                                onClick={() => setPage(p => p - 1)}>←</button>

                            <span>Page {page} / {totalPages}</span>

                            <button className="btn btn-outline-primary" disabled={page >= totalPages}
                                onClick={() => setPage(p => p + 1)}>→</button>
                        </div>
                    </div>
                )}

                {id > 0 && (
                    isPendingDetails
                        ? <p className="my-3">Chargement . . .</p>
                        : details && <DetailsPokemon p={details} onClose={() => setId(-1)} />
                )}
            </div>
        </div>
    );
}

function ListPokemon({ pokemons, onSelect }: { pokemons: Pokemon[]; onSelect: (id: number) => void }) {
    return pokemons.map(p => (
        <li key={p.pokedex_id}
            className="list-group-item list-group-item-action d-flex align-items-center gap-3"
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(p.pokedex_id)}>
            <img src={p.sprites.regular} alt={p.name.fr} width={50} />
            #{p.pokedex_id} {p.name.fr}
        </li>
    ));
}

function DetailsPokemon({ p, onClose }: { p: Pokemon; onClose: () => void }) {
    return (
        <div className="card my-3" style={{ width: "300px" }}>
            <img src={p.sprites.regular} alt={p.name.fr} className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">#{p.pokedex_id} {p.name.fr}</h3>
                <p className="mb-1">Types : {p.types?.map(t => t.name).join(" / ")}</p>
                <p className="mb-1">Taille : {p.height} — Poids : {p.weight}</p>
                <p className="mb-3">PV {p.stats.hp} · Atq {p.stats.atk} · Déf {p.stats.def}</p>
                <button className="btn btn-secondary" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ConsomationApi;