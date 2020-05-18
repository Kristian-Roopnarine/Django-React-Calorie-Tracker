import axios from 'axios'
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGOUT,
    GET_PROFILE_DATA,
    UPDATE_PROFILE_DATA
} from './types'


// check the token and load user

export const loadUser = () => (dispatch,getState) => {
    // user loading
    dispatch({
        type:USER_LOADING
    })
    //get token from the state

    const token = getState().auth.token

    //headers
    const config = {
        headers: {
            'Content-Type':'application/json',
        }
    }

    // if token add to headers config
    if (token) {
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
                type:AUTH_ERROR,
                payload:err
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
                type:AUTH_ERROR,
                payload:err
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
                type:AUTH_ERROR,
                payload:err.response.data
            })
        })
}

export const logout = () => (dispatch,getState) => {
    //get token from the state

    const token = getState().auth.token

    //headers
    const config = {
        headers: {
            'Content-Type':'application/json',
        }
    }

    // if token add to headers config
    if (token) {
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
                type:AUTH_ERROR,
                payload:err
            })
        })
}

export const getProfileData = () => (dispatch,getState) => {
    const config = configureConfig(getState)
    axios.get('http://localhost:8000/api/profile',config)
    .then(res=>{
        dispatch({
            type:GET_PROFILE_DATA,
            payload:res.data
        })
    })
}
export const updateProfileData = (calories) => (dispatch,getState) => {
    const config = configureConfig(getState)
    const body = JSON.stringify({"daily_calories":calories})
    console.log(body)
    axios.put('http://localhost:8000/api/profile',body,config)
    .then(res=>{
        dispatch({
            type:UPDATE_PROFILE_DATA,
            payload:res.data
        })
    }).catch(err=>{
        dispatch({
            type:AUTH_ERROR,
            payload:err
        })
    })
}
// helper function
const configureConfig = (getState) => {
    const token = getState().auth.token

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    return config
}
