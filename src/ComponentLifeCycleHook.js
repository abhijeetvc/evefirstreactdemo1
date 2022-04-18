import React,{ useEffect } from "react"

function ComponentLifeCycleHook(){

    const[number,setNumber]=React.useState(0)
    const[userList,setUserList]=React.useState([])

    //hook -> componentDidMount
    // a) Without dependency array - infinite times
    useEffect(()=>{
        console.log('Hiiiiiiiii');
        fetch("https://jsonplaceholder.typicode.com/users")
         .then(response=>response.json())
         .then(res=>{
             setUserList(res)
              console.log(res);
            //  console.log('hellloooooo');
         })
    })

    // b) With dependency array - execute only once
    // useEffect(()=>{
    //     console.log('Hiiiiiiiii');
    // },[])

    // c) Dependency array with value - gets executed after the component
    // is rendered and state changes
    // useEffect(()=>{
    //     console.log('Hiiiiiiiii');
    // },[number])


    return(
        <div>
             <h1>Use Effect Hook</h1>
             <p>Number is: {number}</p>
        </div>
       
    )
}

export default ComponentLifeCycleHook