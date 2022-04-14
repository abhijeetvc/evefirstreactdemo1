import React from 'react'
function ReadInputObj(){

    const userObj={
        firstName:'',
        lastName:'',
        city:''
    }
    const data=[{
        firstName:'abc',
        lastName:'Xyz',
        city:'Bangalore'
    }]
    
    const[user,setUser]=React.useState(userObj)
    const[userList,setUserList]=React.useState(data)

    const handleInputChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const displayData=()=>{
        console.log(user);
        setUserList([...userList,user])
    }

    return(
        <div>
            <form>
                <label> FirstName : </label>
                <input type='text' name='firstName' onChange={handleInputChange}/>

                <label> LastName : </label>
                <input type='text' name='lastName' onChange={handleInputChange}/>
                
                <label> City : </label>
                <input type='text' name='city' onChange={handleInputChange}/>

                <button type='button' onClick={displayData}>Add</button>
                
                <DisplayList userList={userList}/>
                
            </form>
        </div>
    )
}

function DisplayList({userList}){

    return(
        <div>
            <ul>
                {
                    userList.map((item)=>(
                        <li>{item.firstName +" "+item.lastName+" "+item.city}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ReadInputObj

// class component life cycle methods
// componentDidMount
// componentDidUpdate
// componentWillUnmount