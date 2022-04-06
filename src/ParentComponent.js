
// Props: Properties/Information that is passed 
          // from one component to another

function ParentComponent(){

    const message='Hello React!!!'

    const person={
        firstName:'John',
        lastName:'Doe',
        city:'Pune'
    }

    return(
        <div>
            <h1>Parent Component!!!</h1>
            <p>This is a parent component.</p>
            <ChildComponent person={person}/>
        </div>
    )
}    

function ChildComponent({person}){
    return(
        <div>
            <h2>Child Component!!!</h2>
            <p>FirstName : {person.firstName}</p>
            <p>LastName : {person.lastName}</p>
            <p>City : {person.city}</p>
        </div>
    )
}

export default ParentComponent