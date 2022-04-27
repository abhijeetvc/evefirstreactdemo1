import React from 'react'

import {useNavigate} from 'react-router-dom'

function Register(){

    const userObj={
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    const navigate=useNavigate()

    const[user,setUser]=React.useState(userObj)

    const handleChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const submitData=()=>{
        console.log(user);
        navigate('/login')
    }

    return(
        <div>
            <form>
                <label>FirstName: </label>
                <input type='text' 
                       name='firstName' 
                       onChange={handleChange}/>

                <label>LastName: </label>
                <input type='text' 
                       name='lastName' 
                       onChange={handleChange}/>  

                <label>Email: </label>
                <input type='email' 
                       name='email' 
                       onChange={handleChange}/>

                <label>Password: </label>
                <input type='password' 
                       name='password' 
                       onChange={handleChange}/>   

                <button type='button' onClick={submitData}>Submit</button>                         
            </form>
        </div>
    )
}

export default Register