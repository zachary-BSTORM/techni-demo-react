import { useEffect, useState } from "react";

function Horloge(){
    const [sec , setSec] = useState<number>(55)
    const [min , setMin] = useState<number>(59)
    const [hours , setHours] = useState<number>(0)

    function timingManager() {

        if(sec < 59){
            setSec(sec + 1)
            return
        }

        setSec(0)

        if(min < 59){
            setMin(min  + 1)
            return
        }

        setMin(0)
        setHours(hours + 1)

    }

    useEffect(()=>{

    const interval = setInterval(() => {
                        timingManager()
                    },1000)

    return () => {
        clearInterval(interval)
    }
    },[sec,min,hours])

    return <p>{hours}h : {min}m : {sec}s</p>
}

export default Horloge