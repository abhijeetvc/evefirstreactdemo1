import React,{ createContext } from "react"
import ChildOne from "./ChildOne"
import ChildTwo from "./ChildTwo"

export const MyContext=createContext()

function UseContextDemo(){

    const[value,setValue]=React.useState(100)

    return(
        <MyContext.Provider value={{value,setValue}}>
        <div>
            <h1>Parent Component!!!</h1>
            <p>Value is: {value}</p>
            <ChildOne/>
            <ChildTwo/>
        </div>
        </MyContext.Provider>
    )
}

export default UseContextDemo