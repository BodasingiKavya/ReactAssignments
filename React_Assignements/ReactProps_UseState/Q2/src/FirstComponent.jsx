import {useState} from "react";
function FirstComponent(){
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [res,setRes] = useState(0);
    const [action,setAction] = useState("Select");
    const Calculation=()=>{
        const n1 = num1;
        const n2 = num2;
        switch (action){
            case "Add":
                setRes(n1+n2);
                break;
            case "Subtract":
                setRes(n1-n2);
                break;
            case "Multiply":
                setRes(n1*n2);
                break;
            default:
                setRes("Select action");
        }
    }

    
    return(
        <>
            <h1>Calculator</h1>
            <div>
                <input type="number" placeholder="enter number A" onChange={(e)=>setNum1(e.target.value)} required/>
                <input type="number" placeholder="enter number B" onChange={(e)=>setNum2(e.target.value)} required/>
                <select id="action">
                <option value="Select">Select</option>
                <option value="Add">Add</option>
                <option value="Subtarct">Subtarct</option>
                <option value="Multiply">Multiply</option>
                </select>
                <button onClick={Calculation}>Do Action</button>
                <h2>Result: {res}</h2>
            </div>
        </>
    )
}
export default FirstComponent;