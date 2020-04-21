import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadBreakfastList,deleteFood,getCalories} from '../actions/nutrition'
import {Table} from 'react-bootstrap'

import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Breakfast = (props) => {
    var breakfastList = useSelector(state => state.nutrition.breakfast)
    const dispatch = useDispatch()

    // console log the data from the backend
    useEffect(()=>{
        dispatch(loadBreakfastList())
    },[])
    
    const updateFood = (food) => {
        dispatch(deleteFood(food))
        
    }

    const renderBreakfastList = (breakfastList) => {
        return breakfastList.map(breakfast =>{
            return (
                <tr key={breakfast.id}>
                    <td>{breakfast.name}</td>
                    <td>{breakfast.total_calories}</td>
                    <td>{breakfast.carbs}</td>
                    <td>{breakfast.fat}</td>
                    <td>{breakfast.protein}</td>
                    <td><button onClick={()=>updateFood(breakfast)}><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
            )
        })
    }
    return (
    <>
        <div>Breakfast</div>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                    <th>Protein</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {renderBreakfastList(breakfastList)}
            </tbody>
        </Table>
    </>
    )
}


export default Breakfast