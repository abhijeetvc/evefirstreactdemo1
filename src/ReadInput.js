import React from 'react'

function ReadInput(){

    const[input,setInput]=React.useState('')
    const[data,setData]=React.useState('')

    const onValueChange=(event)=>{
        setInput(event.target.value)
    }

    const displayData=()=>{
        setData(input)
    }

    return(
        <div>
            <input type="text" onChange={onValueChange}/>
            <button type='button' onClick={displayData}>Display</button>
            <p>Input Value is: {data}</p>
        </div>
    )
}

export default ReadInput

