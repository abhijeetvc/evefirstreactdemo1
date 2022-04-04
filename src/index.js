import React from 'react';
import ReactDOM from 'react-dom';
import Display2 from './Display2'
import Display3 from './Display3';
import ListDemo from './ListDemo';
import ReadInput from './ReadInput';
import SimpleStateDemo from './SimpleStateDemo';

//const message=<h1>Hello React!!!</h1>

// function Display(){  // Component
//   console.log('In display component');
//   return(
//       <div>
//         <h1>Hello React!!!</h1>
//         <p>This is a Paragraph.</p>
//         <Display1/>
//       </div>
//   )
// }

// function Display1(){
//     return(
//       <div>
//        <h2>Another Component!!!</h2>
//        <Display2/>
//        </div> 
//     )
// }

// const Display2=()=>{
//   return(
//     <div>
//      <h2>In Display2 Component!!!</h2>
//      <Display3/>
//      </div>
//   )
// }

// class Display3 extends React.Component{
//     render(){
//       return(
//          <h3>In class component!!!</h3>
//       )
//     }
// }

ReactDOM.render(
   <SimpleStateDemo/>   
   ,  // what has to be rendered?
  document.getElementById('root')  // where to render
);

// ReactDOM.render(
//   <Display3/>   
//   ,  // what has to be rendered?
//  document.getElementById('root123')  // where to render
// );

// <div>
// <h1>Hello React!!!</h1>
// <p>This is a Paragraph.</p>
// </div>

