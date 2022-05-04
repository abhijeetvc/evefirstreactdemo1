import axios from "axios"
import React,{ useEffect } from "react"

function AxiosDemo(){

    const[userList,setUserList]=React.useState([])
    
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //     .then(response=>response.data)
    //     .then(res=>{
    //         console.log(res);
    //         setUserList(res)
    //     })
    // },[])

    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.data)
        .then(res=>{
            console.log(res);
            setUserList(res)
        })
    }

    return(
        <div>
            <h1>Axios Demo</h1>
            <button type='button' onClick={fetchData}>Fetch Data</button>
            <DisplayData userList={userList}/>
        </div>
    )
}

function DisplayData({userList}){

    return(
        <ul>
            {
                userList.map((user)=>(
                    <li key={user.id}>{user.name+" | "+user.address.city}</li>
                ))
            }
        </ul>
    )
}

export default AxiosDemo

// XmlHttpRequest
// Ajax Call
// Fetch
// Axios

