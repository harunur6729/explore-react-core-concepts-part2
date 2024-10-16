import { useState } from "react"

export default function Counter(){
    const [count , setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () =>{
        const newCount = count - 1;
        setCount(newCount)
    }
    const handleReset = () =>{
        const newCount = count - count;
        setCount(newCount);
    }
    return(
        <div style={{border:'2px solid red ', margin:'22px', padding:'5px'}}>
            <h3>Counter: {count}</h3>

            <button onClick={handleAdd}>Add</button>    
            <button onClick={handleReduce}>Reduce</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}