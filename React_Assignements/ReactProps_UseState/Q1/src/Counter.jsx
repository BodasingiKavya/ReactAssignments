import {useState} from "react";
function Counter(){
    const [count,setCount] =useState(0);
    const handle =()=>{setCount(count+1)}
    return(
        <>
            <h1>Count {count}</h1>
            <button onClick={handle}>Click To Increment</button>
        </>
    )
}
export default Counter;