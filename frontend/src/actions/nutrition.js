import axios from 'axios'
import {
    GET_BREAKFAST,
    GET_CHEAT,
    GET_DINNER,
    GET_LUNCH,
    GET_SNACKS,
    ADD_FOOD,
    EDIT_FOOD,
    DELETE_FOOD,
    USER_LOADING,
    FOOD_ERROR
} from '../actions/types'


export const loadBreakfastList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get('http://localhost:8000/api/breakfast',config)
    .then(res => {
        dispatch({
            type:GET_BREAKFAST,
            payload:res.data.data
        })
    }).catch(err =>{
        console.log(err)
        dispatch({
            type:FOOD_ERROR
        })
    })
}

export const loadLunchList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get('http://localhost:8000/api/lunch',config)
    .then(res => {
        dispatch({
            type:GET_LUNCH,
            payload:res.data.data
        })
    }).catch(err =>{
        console.log(err)
        dispatch({
            type:FOOD_ERROR
        })
    })
}

export const loadDinnerList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get('http://localhost:8000/api/dinner',config)
    .then(res => {
        dispatch({
            type:GET_DINNER,
            payload:res.data.data
        })
    }).catch(err =>{
        console.log(err)
        dispatch({
            type:FOOD_ERROR
        })
    })
}

export const loadSnackList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get('http://localhost:8000/api/snacks',config)
    .then(res => {
        
        dispatch({
            type:GET_SNACKS,
            payload:res.data.data
        })
    }).catch(err =>{
        console.log(err)
        dispatch({
            type:FOOD_ERROR
        })
    })
}

export const loadCheatList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get('http://localhost:8000/api/cheat',config)
    .then(res => {
        dispatch({
            type:GET_CHEAT,
            payload:res.data.data
        })
    }).catch(err =>{
        console.log(err)
        dispatch({
            type:FOOD_ERROR
        })
    })
}


export const deleteFood = (food) => (dispatch,getState) => {
    const category = returnCategory(food)
    const id = food.id
    const config = configureConfig(dispatch,getState)
    axios.delete(`http://localhost:8000/api/food/${id}`,config)
    .then(
        dispatch({
            type:DELETE_FOOD,
            payload:{id,category}
        })
    ).catch(err =>{
        console.log(err)
    })
}




// helper function
const configureConfig = (dispatch,getState) => {
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

const returnCategory = (food) => {
    switch(food.category){
        case "B":
            return "breakfast"
        case "L":
            return "lunch"
        case "D":
            return "dinner"
        case "S":
            return "snack"
        case "C":
            return "cheat"
        default:
            return food
    }
}
