import React from 'react'

function ListDemo(){

    const fruitsArray=['Apple','Orange','Banana','Grapes']

    const[fruits,setFruits]=React.useState(fruitsArray)

    const[value,setValue]=React.useState('')

    const handleValue=(event)=>{
        setValue(event.target.value)
    }

    // push and concat
    const addValue=()=>{
        setFruits([...fruits,value])
    }

    return(
        <div>
            <h1>Display Fruits!!!</h1>
            <input type='text' onChange={handleValue}/>
            <button onClick={addValue}>Add</button>
            <ListProps fruits={fruits}/>
        </div>
    )
}

function ListProps(props){

    return(
        <div>
            <ul>
                {
                    props.fruits.map((fruit)=>(
                        <li>{fruit}</li>
                    ))
                }
            </ul>
        </div>
    )
}



export default ListDemo