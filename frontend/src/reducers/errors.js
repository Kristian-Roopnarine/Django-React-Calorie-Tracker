import { 
    GET_ERRORS,
    AUTH_ERROR,
    FOOD_ERROR
} from "../actions/types"

const initialState = {
    msg:{},
    status:null
}

export default function(state = initialState,action){
    switch(action.type){
        
        case GET_ERRORS:
            return {
                msg:action.payload.msg,
                status:action.payload.status
            }
        case AUTH_ERROR:
            return{
                ...state,
                msg:action.payload
            }
        case FOOD_ERROR:
            return {
                ...state,
                msg:action.payload
            }
        default:
            return state
    }
}