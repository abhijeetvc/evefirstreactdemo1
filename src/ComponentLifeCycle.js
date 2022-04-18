import React from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class ComponentLifeCycle extends React.Component{

    constructor(){
        super()
        this.state={
            number:0
        }
    }

    // only once
    componentDidMount(){
         console.log('In component did mount : '+this.state.number);
    }

    // called on state change
    componentDidUpdate(){
        console.log('In component did update : '+this.state.number);
    }

    incrementNumber=()=>{
        this.setState({number:this.state.number+1})
    }

    toggleComponent=()=>{
        this.setState({number:this.state.number === 0 ? 1:0})
    }

    render(){
        let component=this.state.number ? <ComponentOne/> : <ComponentTwo/>
        return(
            <div>
                <h1>Component Life Cycle Methods</h1>
                <p>Number is: {this.state.number}</p>
                <button type='button' onClick={this.incrementNumber}>Increment</button>
                <button type='button' onClick={this.toggleComponent}>Toggle</button>
                {component}
            </div>
        )
    }
}

export default ComponentLifeCycle
