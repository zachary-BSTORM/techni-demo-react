import { nanoid } from "nanoid";
import { Suspense, use, useEffect, useState } from "react";

interface Personnage {
    "name": {
      "first": string,
      "middle": string,
      "last": string
    },
    "images": {
      "head-shot": string,
      "main": string
    },
    "gender": string,
    "species": string,
    "homePlanet": string,
    "occupation": string,
    "sayings": string[],
    "id": number,
    "age": string 
}

function DemoAjax2 (){
    const [promesse , setPromesse] = useState<Promise<Personnage[]> | null>(null)

    function waiting(ms : number){
        return new Promise(resolve => setTimeout(resolve,ms))
    }

    function getPersonnage(){
        setPromesse(
            waiting(5000)
            .then(() => fetch("https://api.sampleapis.com/futurama/characters"))
            .then(r => r.json())
        )
    }
    useEffect(()=> {
        console.log("Composant monté");
        getPersonnage()


        return() => {
            console.log("composant démonté");
            
            setPromesse(null)
        }
    },[])

    return (
        <>
        {promesse && 
            <Suspense fallback={<LoadingMessage/>}>
                <ListPersonnage promesse={promesse}/>
            </Suspense>
        }
        </>
    )
}

function ListPersonnage({promesse} : {promesse : Promise<Personnage[]>}){
    const personnages = use(promesse)
    
    return (    
        <ul>
            {personnages.map(p => (
                <CardPersonnage key={nanoid()} p={p}/>
            ))}
        </ul>
    )
}

function LoadingMessage(){
    return(
        <h4>Loading . . .</h4>
    )
}

function CardPersonnage({p} : {p : Personnage}){
    const [textVisible,setTextVisible] = useState<boolean>(false)


    return (
        <li>
            <h2>{p.name.first} - {p.name.middle} - {p.name.last}</h2>
            <img src={p.images.main || undefined} alt={p.name.first}  width={100}/>
            <p>espece : {p.species}</p>
            <p>Planète : {p.homePlanet}</p>
            <p>Occupation : {p.occupation}</p>
            <p>id : {p.id}</p>
            <button onClick={()=> setTextVisible(textVisible => !textVisible)}>Show text</button>
            {textVisible ? (
                <ul>
                    {p.sayings.map(text => (
                        <li>{text}</li>
                    ))}
                </ul>
            ) : null}
        </li>
    )
}


export default DemoAjax2