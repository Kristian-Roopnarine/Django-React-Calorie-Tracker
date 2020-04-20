import {
    GET_BREAKFAST,
    GET_CHEAT,
    GET_DINNER,
    GET_LUNCH,
    GET_SNACKS,
    ADD_FOOD,
    EDIT_FOOD,
    DELETE_FOOD
} from '../actions/types'

const initialState = {
    breakfast:[],
    lunch:[],
    dinner:[],
    snacks:[],
    cheat:[],
    totalCalories:0,
}



export default function(state=initialState,action){
    switch(action.type){
        case GET_BREAKFAST:
            return{
                ...state,
                breakfast:action.payload
            }
        case GET_LUNCH:
            return{
                ...state,
                lunch:action.payload
            }
        
        case GET_DINNER:
            return{
                ...state,
                dinner:action.payload
            }            
        case GET_SNACKS:
            return {
                ...state,
                snacks:action.payload
            }
        case GET_CHEAT:
            return {
                ...state,
                cheat:action.payload
            }
        default:
            return state
    }
}
