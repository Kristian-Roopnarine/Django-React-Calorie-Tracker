import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadSnackList,deleteFood,getCalories} from '../actions/nutrition'
import FoodTable from './FoodTable'

const Snacks = (props) => {
    var snacksList = useSelector(state => state.nutrition.S)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadSnackList())
    },[])
    
    const deleteSnacks= (food) => {
        dispatch(deleteFood(food))
    }

    return (
        <>
            <h4 className="text-success">Snacks</h4>
            <FoodTable 
                foodList = {snacksList}
                category="S"
                onClickTrash={deleteSnacks}
            />
        </>
    )
}


export default Snacks