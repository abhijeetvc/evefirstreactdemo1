import React from 'react'

function UseMemoDemo(){

    const users=[{
        id:1,
        name:'John',  
    },{
        id:2,
        name:'Peter',     
    },{
        id:3,
        name:'Richard',    
    }]

    const [text,setText]=React.useState('')
    const [search,setSearch]=React.useState('')

    const handleInputChange=(event)=>{
        setText(event.target.value)
    }

    const handleSearch=()=>{
        setSearch(text)
    }

    const filteredData=users.filter((user)=>{
        return user.name.includes(search)
    })

    return(
        <div>
            <h1>Use Memo Demo</h1>
            <input type='text' onChange={handleInputChange}/>
            <button type='button' onClick={handleSearch}>Search</button>
            <Display userList={filteredData}/>
        </div>
    )
}

function Display({userList}){

    return(
        <ul>
            {
                userList.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    )
}

export default UseMemoDemo