import React, {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../../actions/auth'


const Login = (props) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const loginUser = e => {
        e.preventDefault()
        dispatch(login(username,password))
        setUsername("")
        setPassword("")
    }


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
            <button type="button">logout</button>
        </div>
    )
}

export default Login