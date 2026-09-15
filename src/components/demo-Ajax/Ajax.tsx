import { useActionState } from "react";


interface ResponseDogApi {
    message : string;
    status : string
}

function DemoAjax(){
   

    async function getData() : Promise<ResponseDogApi>{
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        return await response.json()

    }
const [data ,actionGetData,isPending ] = useActionState(getData ,null)

    return (
        <>
        <form action={actionGetData}>
            <button type="submit" disabled={isPending}> {isPending ? "chargement" : "getData"}</button>
        </form>

        {data && <img src={data.message}  alt={data.message} width={150}/>}

        </>
    )
}


export default DemoAjax