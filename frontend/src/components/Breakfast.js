import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadBreakfastList,deleteFood,getCalories} from '../actions/nutrition'
import FoodTable from './FoodTable'


const Breakfast = (props) => {
    var breakfastList = useSelector(state => state.nutrition.B)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadBreakfastList())
    },[])
    
    const deleteBreakfast = (food) => {
        dispatch(deleteFood(food))
        
    }

    return (
        <>
            <h4>Breakfast</h4>
            <FoodTable 
                foodList = {breakfastList}
                category="B"
                onClick = {deleteBreakfast}
            />
        </>
    )
}


export default Breakfast