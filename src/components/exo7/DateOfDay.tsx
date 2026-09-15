import { useEffect, useState } from "react";

function DateOfDay(){
    const [date , setDate] = useState<Date>(new Date)

    const MOIS = [
        "Janvier",
        "Fevrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre"
    ]

    const jour =  String(date.getDate()).padStart(2,"0")
    const mois = MOIS[date.getMonth()]
    const annee = date.getFullYear()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setDate(new Date)
        },1000)

        return () => {
            clearInterval(interval)
        }
    },[])

    return (
        <div className="card">


            <div className="card p-3 text-center">
                <p>{date.toLocaleDateString("fr-FR",{dateStyle : "full"})}</p>
            </div>


            <div className="card p-3 text-center">
                <p>{jour} {mois} {annee}</p>
            </div>


        </div>
    )
}

export default DateOfDay