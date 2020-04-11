import React, {useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {login} from '../../actions/auth'
import {Redirect,Link} from 'react-router-dom'


const Login = (props) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const loginUser = (e) => {
        e.preventDefault()
        dispatch(login(username,password))
        setUsername("")
        setPassword("")
        return <Redirect to="/" />
    }
    
    const returnForm = () =>{
        return (
            <div>
                LOGIN here
                <form onSubmit={loginUser}>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    
                    <button type="submit">Login</button>
                </form>
                
            </div>
        )
    }

    return (<>{auth.isAuthenticated ? <Redirect to="/" /> : returnForm()}</>)
}

export default Login