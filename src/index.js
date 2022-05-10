import React from 'react';
import ReactDOM from 'react-dom';
import CallBackEvent from './CallBackEvent';

import ComponentLifeCycle from './ComponentLifeCycle';
import ComponentLifeCycleHook from './ComponentLifeCycleHook';
import Display2 from './Display2'
import Display3 from './Display3';
import ListDemo from './ListDemo';
import ParentComponent from './ParentComponent';
import ReadInput from './ReadInput';
import ReadInputObj from './ReadInputObj';
import SimpleStateDemo from './SimpleStateDemo';
import App from './App'
import UseContextDemo from './UseContextDemo';
import AxiosDemo from './AxiosDemo';
import UseMemoDemo from './UseMemoDemo';
import UseReducerDemo from './UseReducerDemo';

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
   <UseReducerDemo/>
   ,  // what has to be rendered?
   document.getElementById('root')  // where to render
);

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(<UseMemoDemo/>)

// ReactDOM.render(
//   <Display3/>   
//   ,  // what has to be rendered?
//  document.getElementById('root123')  // where to render
// );

// <div>
// <h1>Hello React!!!</h1>
// <p>This is a Paragraph.</p>
// </div>

