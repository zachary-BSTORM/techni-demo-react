import { useEffect, useState } from "react";

function TestEffect(){
  const [value,setValue] = useState<number>(0)

  function increment(){
  setValue(v => v += 1)
}
function decrement(){
  setValue(v => v -= 1)
}

useEffect(() => {
    console.log("montage");
    console.log("value à changé",value);
    
    

    return () => {
        console.log("Démontage");
        
    }
},[value])

// useEffect(() => {
//   console.log("composant monté")

//   let interval = null
  
//   if(interval == null){
//     interval = setInterval(() => {
//       setValue(v => v += 1)
//     },1000)
    
//   }
  
//   return () => {
//     console.log("composant démonté");
//     clearInterval(interval)
//   }

// },[value])

  return (
          <div>
            <p>{value}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
          </div>
          )

}

function ContainerTestEffect(){
    const [visible , setVisible] = useState<boolean>(true)

    return (

        <>

        <div className="card">
            <pre className="card">
{`
    useEffect(() => {
        // Code à exécuter lors du montage du composant
        console.log("Composant monté");

        return () => {
            // Code de nettoyage lors du démontage du composant
            console.log("Composant démonté");
        };

    }, []); 
    // Pas de tableau signifie que l'effet s'exécute à chaque rendu
    // Le tableau vide signifie que l'effet s'exécute une seule fois au montage
    // Le tableau avec une ou plusieurs valeurs signifie que l'effet s'exécute à chaque changement d'une de ces valeurs

    `}
                </pre>
          <button onClick={()=> setVisible(v => !v)}>{visible ? "hide" : "show"}</button>

          {visible ? (
              <TestEffect/>
            ) : (<p>rien</p>)}  
            </div>
        </>
    )
}

export default ContainerTestEffect