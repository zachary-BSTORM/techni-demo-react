// import { useState } from "react"

// function Composant3() {

//     const [nom, setNom] = useState('')
//     const [prenom, setPrenom] = useState('')

//     function submit(e) {
//         e.preventDefault()
//         console.log(nom)
//         console.log(prenom)
//     }

//     return <>
//         <form onSubmit={submit}>
//             <input
//                 defaultValue={nom} 
//                 onChange={e => setNom(e.target.value)} 
//                 name="nom" />
//             <input defaultValue={prenom}
//                 onChange={e => setPrenom(e.target.value)} 
//                 name="prenom" />
//             <button>Envoyer</button>
//         </form>
//     </>
// }

// export default Composant3

import { useActionState } from "react"

function Composant3() {

    const [values, action, isPending] = useActionState(
        submit, { nom: '', prenom: '' }
    )

    async function submit(_: {nom: string, prenom: string}, data: FormData) {
        console.log(Object.fromEntries(data))
        // simulation appel serveur
        await new Promise(
            (resolve) => setTimeout(() => resolve(42), 5000)
        )
        return Object.fromEntries(data) as {nom: string, prenom: string}
    }

    return <>
        {JSON.stringify(values)}
        <form action={action}>
            <input defaultValue={values.nom}
                name="nom" />
            <input
                name="prenom" defaultValue={values.prenom} />
            <button disabled={isPending}>Envoyer</button>
        </form>
    </>
}

export default Composant3