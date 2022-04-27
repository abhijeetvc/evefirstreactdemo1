import { useContext } from "react"
import { MyContext } from "./UseContextDemo"

function ChildTwo(){

    //const value=useContext(MyContext)
    const {value,setValue} =useContext(MyContext)

    return(
        <div>
            <h2>Child Two Component</h2>
            <p> Value is : {value} </p>
        </div>
    )
}

export default ChildTwo