import React from 'react'

function ReadInput(){

    const[input,setInput]=React.useState('')
    const[data,setData]=React.useState('')

    const onValueChange=(event)=>{
        console.log(event.target);
        setInput(event.target.value)
    }

    const displayData=()=>{
        setData(input)
    }

    return(
        <div>
            <input type="text" name="firstName" onChange={onValueChange}/>
            <input type="text" name="lastName" onChange={onValueChange}/>
            <button type='button' onClick={displayData}>Display</button>
            <p>Input Value is: {data}</p>
        </div>
    )
}

export default ReadInput

