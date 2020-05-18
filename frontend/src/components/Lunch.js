import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadLunchList,deleteFood} from '../actions/nutrition'
import FoodTable from './FoodTable'

const Lunch = (props) => {
    var lunchList = useSelector(state => state.nutrition.L)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadLunchList())
    },[])
    
    const deleteLunch = (food) => {
        dispatch(deleteFood(food))
        
    }
    return (
        <>
            <h4 className="text-success">Lunch</h4>
            <FoodTable 
                foodList = {lunchList}
                category="L"
                onClickTrash={deleteLunch}
            />
        </>
    )
}


export default Lunch