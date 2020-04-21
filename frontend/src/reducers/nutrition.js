import {
    GET_BREAKFAST,
    GET_CHEAT,
    GET_DINNER,
    GET_LUNCH,
    GET_SNACKS,
    ADD_FOOD,
    EDIT_FOOD,
    DELETE_FOOD,
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
        case DELETE_FOOD:
            if (action.payload.category === "breakfast") {
                return {
                    ...state,
                    breakfast: state.breakfast.filter(breakfast => breakfast.id !== action.payload.id)
                }
            } else if (action.payload.category === "lunch") {
                return {
                    ...state,
                    lunch: state.lunch.filter(lunch => lunch.id !== action.payload.id)
                }
            } else if (action.payload.category === "dinner") {
                return {
                    ...state,
                    dinner: state.dinner.filter(dinner => dinner.id !== action.payload.id)
                }
            } else if (action.payload.category === "snack") {
                return {
                    ...state,
                    snacks: state.snacks.filter(snacks => snacks.id !== action.payload.id)
                }
            } else if (action.payload.category === "cheat") {
                return {
                    ...state,
                    cheat: state.cheat.filter(cheat => cheat.id !== action.payload.id)
                }
            } else {
                return state
            }
        default:
            return state
    }
}
