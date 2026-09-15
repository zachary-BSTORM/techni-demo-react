import { useState } from "react";
import Horloge from "../exo6/horloge";
import DateOfDay from "../exo7/DateOfDay";

function SwitchDateToHorloge(){
    const [value , setValue] = useState<boolean>(true)
    const [choice , SetChoice] = useState<string>("Aucun")

    function toggleValue(){
        setValue(v => !v)
    }

    function returnChoice(){
        switch (choice){
            case "Horloge" : 
                return <Horloge/>
            case "Date" :
                return <DateOfDay/>
            default:
                return null
        }
    }

    return (

        <div className="card p-3">

            <div className="card p-3">
                <button onClick={() => toggleValue()}>{value ? "Date " : "Horloge"}</button>
                {value ? <Horloge/> : <DateOfDay/>}
            </div>

            <div className="card p-3">
                <label>Choisir</label>
                <select value={choice} onChange={(e) => SetChoice(e.target.value)}>
                    <option value="Aucun">Aucun</option>
                    <option value="Horloge">Horloge</option>
                    <option value="Date">Date</option>
                </select>
                {returnChoice()}
            </div>

        </div>
        
    )

}

export default SwitchDateToHorloge