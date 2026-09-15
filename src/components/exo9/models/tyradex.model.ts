// models/pokemon.ts

export interface Pokemon {
    pokedex_id: number;
    generation: number;
    category: string;
    name: PokemonName;
    sprites: PokemonSprites;
    types: PokemonType[] | null;
    talents: Talent[] | null;
    stats: PokemonStats;
    resistances: Resistance[];
    evolution: Evolution;
    height: string;
    weight: string;
    egg_groups: string[] | null;
    sexe: Sexe | null;
    catch_rate: number;
    level_100: number;
    formes: Forme[] | null;
}

export interface PokemonName {
    fr: string;
    en: string;
    jp: string;
}

export interface PokemonSprites {
    regular: string;
    shiny: string | null;
    gmax: GmaxSprites | null;
}

export interface GmaxSprites {
    regular: string;
    shiny: string;
}

export interface PokemonType {
    name: string;
    image: string;
}

export interface Talent {
    name: string;
    tc: boolean;
}

export interface PokemonStats {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
}

export interface Resistance {
    name: string;
    multiplier: number;
}

export interface Evolution {
    pre: EvolutionStep[] | null;
    next: EvolutionStep[] | null;
    mega: MegaEvolution[] | null;
}

export interface EvolutionStep {
    pokedex_id: number;
    name: string;
    condition: string;
}

export interface MegaEvolution {
    orbe: string;
    sprites: { regular: string; shiny: string };
}

export interface Sexe {
    male: number;
    female: number;
}

export interface Forme {
    region: string;
    name: PokemonName;
}