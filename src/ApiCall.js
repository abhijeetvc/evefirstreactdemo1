import React,{ useEffect } from "react"

function ApiCall(){

    const[users,setUsers]=React.useState([])

    useEffect(()=>{
            fetch("http://localhost:8989/api/users/getUsers")
            .then(response=>response.json())
            .then(res=>{
                setUsers(res)
            })
    },[])

    return(
        <div>
            <ul>
                { users.map((item)=>(
                    <li key={item._id}>{item.firstName+" "+item.lastName}</li>
                ))
                    
                }
            </ul>
        </div>
    )
}

export default ApiCall