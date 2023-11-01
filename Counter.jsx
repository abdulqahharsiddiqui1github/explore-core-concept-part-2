// this is state man !!
import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd=()=>{
        const newAdd = count + 1;
        setCount(newAdd);
    }

    const handleReduce =()=>{
        const newReduce = count - 1;
        setCount(newReduce)
    }

    return (
        <div style={{border: "1px solid red"}}>
            <h2>Counter: {count} </h2>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>reduce</button>

        </div>
    )
}