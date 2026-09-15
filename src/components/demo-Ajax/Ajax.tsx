import { useState } from "react";


interface ResponseDogApi {
    message : string;
    status : string
}

function DemoAjax(){
    const [data , setData] = useState<ResponseDogApi>({status : "" , message: ""})


    async function getData(){
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        const result = await response.json()
        setData(result)
        
        
    }

    return (
        <>

        <button onClick={() => getData()}>GetData</button>
            {
                data ? 
                (<img src={data.message} alt={data.message} width={500} />)
                :
                null
            }
        </>
    )
}


export default DemoAjax