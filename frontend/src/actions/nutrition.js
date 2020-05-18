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
    FOOD_ERROR,
    GET_CALORIES,
    UPDATE_CALORIES,
    GET_WEIGHT,
    UPDATE_WEIGHT
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

export const addFood = (food) => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    const body = JSON.stringify(food)
    console.log(food)
    axios.post(`http://localhost:8000/api/food-log/`,body,config)
    .then( res => {
        dispatch({
            type:UPDATE_CALORIES,
            payload:res.data
        })
        dispatch({
            type:ADD_FOOD,
            payload:res.data
        })
    }).catch(err =>{
        console.log(err)
    })
}

export const editFood = (foodItem,original) => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    const body = JSON.stringify(foodItem)

    // change between edited item and original
    const total_calories =  foodItem.total_calories - original.total_calories
    const fat = foodItem.fat - original.fat
    const protein =  foodItem.protein - original.protein
    const carbs = foodItem.carbs - original.carbs

    axios.put(`http://localhost:8000/api/food-log/${original.id}/`,body,config)
    .then(res =>{
        dispatch({
            type:EDIT_FOOD,
            payload:res.data
        })
    }).then (
        dispatch({
            type:UPDATE_CALORIES,
            payload:{total_calories,fat,protein,carbs}
        })
    ).catch(err=>{
        console.log(err)
    })

}

export const deleteFood = (food) => (dispatch,getState) => {
    const category = food.category
    const id = food.id
    const total_calories = -food.total_calories
    const fat = -food.fat
    const protein = -food.protein
    const carbs = -food.carbs
    const config = configureConfig(dispatch,getState)

    axios.delete(`http://localhost:8000/api/food-log/${id}`,config)
    .then(
        dispatch({
            type:DELETE_FOOD,
            payload:{id,category}
        })
    ).then(
        dispatch({
            type:UPDATE_CALORIES,
            payload:{total_calories,fat,protein,carbs}
        })
    ).catch(err =>{
        console.log(err)
    })
}

export const getCalories = () => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    axios.get('http://localhost:8000/api/user/total-calories',config)
    .then(res =>{
        dispatch({
            type:GET_CALORIES,
            payload:res.data.data
        })
    }).catch(err =>{
        console.log(err)
    })
}

export const getUserWeight = () => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    axios.get('http://localhost:8000/api/user/weight',config)
    .then(res =>{
        dispatch({
            type:GET_WEIGHT,
            payload:res.data.weight
        })
    }).catch(err =>{
        console.log(err)
    })
}

export const updateUserWeight = (weight) => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    const body = JSON.stringify({"number":weight})
    axios.post('http://localhost:8000/api/user/weight',body,config)
    .then(res =>{
        console.log(res.data)
        dispatch({
            type:UPDATE_WEIGHT,
            payload:res.data.data
        })
    }).catch(err =>{
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


