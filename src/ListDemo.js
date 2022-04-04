
function ListDemo(){

    const fruits=['Apple','Orange','Banana','Grapes']

    return(
        <div>
            <ul>
                {
                    fruits.map((fruit)=>(
                        <li>{fruit}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ListDemo