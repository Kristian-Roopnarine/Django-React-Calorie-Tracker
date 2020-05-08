import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadDinnerList,deleteFood} from '../actions/nutrition'
import FoodTable from './FoodTable'

const Dinner = (props) => {
    var dinnerList = useSelector(state => state.nutrition.D)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadDinnerList())
    },[])
    
    const deleteDinner = (food) => {
        dispatch(deleteFood(food))
        
    }
    return (
        <>
            <h4 className="text-success">Dinner</h4>
            <FoodTable 
                foodList = {dinnerList}
                category="D"
                onClick={deleteDinner}
            />
        </>
    )
}


export default Dinner