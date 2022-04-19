import React from 'react'

function CallBackEvent(){

    const[input,setInput]=React.useState('')

    const handleInputChange=(event)=>{
        setInput(event.target.value)
    }
    return(
        <div>
            <h1>Parent Component</h1>
            <p>Text is: {input}</p>
            <ChildComponent inputValue={input} 
                            onInputChange={handleInputChange}/>
        </div>
    )
}

function ChildComponent({inputValue,onInputChange}){
    return(
        <div>
            <h1>Child Component</h1>
            <input type='text' 
                   value={inputValue} 
                   onChange={onInputChange}/>
        </div>
    )
}

export default CallBackEvent