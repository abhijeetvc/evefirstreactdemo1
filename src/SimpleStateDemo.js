import React,{useEffect} from 'react'

// function SimpleStateDemo(){
//     // State is an object
//     const[number,setNumber]=React.useState(100)  //hook

//   const updateNumber=()=>{
//       setNumber(number+10)  // re-rendering
//    }

//     return(
//         <div>
//             <h1>State Demo</h1>
//             <p>Number is: {number}</p>
//             <button type='button' onClick={updateNumber}>Update</button>
//         </div>
//     )
// }

class SimpleStateDemo extends React.Component{
   
    constructor(){
        super()
        this.state={
            number:100
        }
    }

  updateNumber=()=>{
     this.setState({number:this.state.number+10})
   }

   render(){
    return(
        <div>
            <h1>State Demo</h1>
            <p>Number is: {this.state.number}</p>
            <button type='button' onClick={this.updateNumber}>Update</button>
        </div>
    )
   }
}

export default SimpleStateDemo

