import { useContext } from "react"
import { MyContext } from "./UseContextDemo"

function ChildOne(){

    const {value,setValue} =useContext(MyContext)
   //  const setValue=useContext(MyContext)

    const add=()=>{
        setValue(value+10)
    }
    
    return(
        <div>
            <h2>Child One Component</h2>
            <p> Value is : {value} </p>
            <button type='button' onClick={add}>Add</button>
        </div>
    )
}

export default ChildOne