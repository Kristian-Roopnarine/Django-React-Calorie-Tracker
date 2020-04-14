import axios from 'axios'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT
} from './types'


// check the token and load user

export const loadUser = () => (dispatch,getState) => {
    // user loading
    dispatch({
        type:USER_LOADING
    })
    //get token from the state

    const token = getState().auth.token
    console.log(token)

    //headers
    const config = {
        headers: {
            'Content-Type':'application/json',
        }
    }

    // if token add to headers config
    if (token) {
        console.log('found token')
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('http://localhost:8000/api/auth/user',config)
        .then(res => {
            dispatch({
                type:USER_LOADED,
                payload:res.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type:AUTH_ERROR
            })
        })
}

// login user
export const login = (username,password) => dispatch => {

    //headers
    const config = {
        headers: {
            'Content-Type':'application/json',
        }
    }

    // request body
    const body = JSON.stringify({username,password})

    axios.post('http://localhost:8000/api/auth/login',body,config)
        .then(res => {
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type:LOGIN_FAIL
            })
        })
}

export const register = (username,password) => dispatch => {

    //headers
    const config = {
        headers: {
            'Content-Type':'application/json',
        }
    }

    // request body
    const body = JSON.stringify({username,password})

    axios.post('http://localhost:8000/api/auth/register',body,config)
        .then(res => {
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type:REGISTER_FAIL
            })
        })
}

export const logout = () => (dispatch,getState) => {
    //get token from the state

    const token = getState().auth.token
    console.log(token)

    //headers
    const config = {
        headers: {
            'Content-Type':'application/json',
        }
    }

    // if token add to headers config
    if (token) {
        console.log('found token')
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.post('http://localhost:8000/api/auth/logout',config)
        .then(res => {
            dispatch({
                type:LOGOUT,
                payload:res.data
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type:AUTH_ERROR
            })
        })
}
