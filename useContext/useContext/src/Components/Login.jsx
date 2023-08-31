import { useContext } from "react"
import { LoginContext  } from "../Contexts/LoginContext"


const Login = () => {
    
   const { setUsername, setShowProfile } = useContext( LoginContext );
    
    return (
        <>
            <input
            type="text"
            placeholder="Username..."
            onChange={(event => setUsername(event.target.value))}
            />
            <input
            type="text"
            placeholder="Password..."
            />
            <button onClick={ () => setShowProfile(prev => !prev) } >Login</button>
        </>
    )
}

export default Login 