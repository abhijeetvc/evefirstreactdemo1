
function Login(){

    return(
        <div>
            <form>
                <label>UserName : </label>
                <input type='text' name='username'/>

                <label>Password : </label>
                <input type='password' name='password'/>

                <button type='button' >Login</button>
                
            </form>
        </div>
    )
}

export default Login