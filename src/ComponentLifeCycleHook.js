import React,{ useEffect } from "react"

function ComponentLifeCycleHook(){

    const[number,setNumber]=React.useState(0)

    //hook -> componentDidMount
    useEffect(()=>{
        console.log('Hiiiiiiiii');
    })

    return(
        <div>
             <h1>Use Effect Hook</h1>
             <p>Number is: {number}</p>
        </div>
       
    )
}

export default ComponentLifeCycleHook