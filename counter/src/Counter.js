import { useState, useEffect } from "react"

 function Counter(){
    const [count,setCount]=useState(0)

    useEffect(()=>{
            const intervalId = setInterval(() => {
            setCount(prevCounter => prevCounter + 1);
            }, 1000);
        return () => {
            clearInterval(intervalId);
        };
      },[count])
   
    return (
        <>
        <p>Count : {count}</p>
        
        </>

    )
 }
 export default Counter