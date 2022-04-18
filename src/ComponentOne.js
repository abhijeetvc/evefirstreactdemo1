import React from "react"

class ComponentOne extends React.Component{

    componentWillUnmount(){
        console.log('Component One unmounted!!!');
    }

    render(){
    return(
        <div>
            <h1>Component One</h1>
            <p>This is component One</p>
        </div>
    )
}
}

export default ComponentOne