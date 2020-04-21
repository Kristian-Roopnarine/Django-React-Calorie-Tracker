import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadDinnerList,deleteFood,getCalories} from '../actions/nutrition'
import {Table} from 'react-bootstrap'

import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Dinner = (props) => {
    const dinnerList = useSelector(state => state.nutrition.dinner)
    const dispatch = useDispatch()

    // console log the data from the backend
    useEffect(()=>{
        dispatch(loadDinnerList())
    },[])

    const updateFood = (food) => {
        dispatch(deleteFood(food))
        
    }
    const renderDinnerList = (dinnerList) => {
        return dinnerList.map(dinner =>{
            return (
                <tr key={dinner.id}>
                    <td>{dinner.name}</td>
                    <td>{dinner.total_calories}</td>
                    <td>{dinner.carbs}</td>
                    <td>{dinner.fat}</td>
                    <td>{dinner.protein}</td>
                    <td><button onClick={()=>updateFood(dinner)}><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
            )
        })
    }
    return (
        <>
            <div>Dinner</div>
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
                    {renderDinnerList(dinnerList)}
                </tbody>
            </Table>
        </>
    )
}


export default Dinner