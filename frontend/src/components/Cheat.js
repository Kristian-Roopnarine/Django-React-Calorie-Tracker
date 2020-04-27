import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadCheatList,deleteFood} from '../actions/nutrition'
import FoodTable from './FoodTable'

const Cheat = (props) => {
    var cheatList = useSelector(state => state.nutrition.C)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadCheatList())
    },[])
    
    const deleteCheat = (food) => {
        dispatch(deleteFood(food))
        
    }
    return (
        <>
            <h4>Cheat</h4>
            <FoodTable 
                foodList = {cheatList}
                category="C"
                onClick={deleteCheat}
            />
        </>
    )
}


export default Cheat