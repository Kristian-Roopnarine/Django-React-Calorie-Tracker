import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadCheatList,deleteFood,getCalories} from '../actions/nutrition'
import {Table} from 'react-bootstrap'

import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Cheat = (props) => {
    const cheatList = useSelector(state => state.nutrition.cheat)
    const dispatch = useDispatch()

    // console log the data from the backend
    useEffect(()=>{
        dispatch(loadCheatList())
    },[])
    const updateFood = (food) => {
        dispatch(deleteFood(food))
        
    }
    const renderCheatList = (cheatList) => {
        return cheatList.map(cheat =>{
            return (
                <tr key={cheat.id}>
                    <td>{cheat.name}</td>
                    <td>{cheat.total_calories}</td>
                    <td>{cheat.carbs}</td>
                    <td>{cheat.fat}</td>
                    <td>{cheat.protein}</td>
                    <td><button onClick={()=>updateFood(cheat)}><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
            )
        })
    }
    return (
        <>
            <div>Cheat</div>
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
                    {renderCheatList(cheatList)}
                </tbody>
            </Table>
        </>
    )
}


export default Cheat

