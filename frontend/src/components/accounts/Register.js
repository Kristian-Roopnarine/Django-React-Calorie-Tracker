import React, {useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import {register} from '../../actions/auth'

const Register = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [password2,setPassword2] = useState("")
    const dispatch = useDispatch()
    const createUser = e => {
        e.preventDefault()
        if(password && password2 && password===password2){
            dispatch(register(username,password))
        } else {
            alert("Passwords do not match")
        }
        setPassword("")
        setPassword2("")
        setUsername("")

    }

    return (
        <div>
            Register here
            <form onSubmit={createUser}>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <label>Confirm Password</label>
                <input type="password" name="password" value={password2} onChange={(e) => setPassword2(e.target.value)}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register