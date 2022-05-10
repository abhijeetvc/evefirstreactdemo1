import { useReducer } from "react"

const initialState={count:0}

//reducer is a function. Consists of state and action
// action - constants that consist of type and payload

function reducer(state,action){

    switch(action.type){

        case 'increment':
            return { count: state.count + 1}
        
        case 'decrement':
            return { count: state.count - 1}

        default:
            throw new Error()  
                
    }

}

function UseReducerDemo(){

    // const[count,setCount]=React.useState(0)

    // const incrementCount=()=>{
    //     setCount(count+1)
    // }

    // const decrementCount=()=>{
    //     setCount(count-1)
    // }

    const[state,dispatch]=useReducer(reducer,initialState)

    return(
        <div>
            <h2>Count : {state.count}</h2>
            {/* <button type='button' onClick={incrementCount}>Increment</button>
            <button type='button' onClick={decrementCount}>Decrement</button> */}

            <button type='button' 
                    onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button type='button' 
                    onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        </div>
    ) 
}

export default UseReducerDemo