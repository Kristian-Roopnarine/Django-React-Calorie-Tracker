import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadBreakfastList} from '../actions/nutrition'
import {Table} from 'react-bootstrap'

const Breakfast = (props) => {
    const breakfastList = useSelector(state => state.nutrition.breakfast)
    const dispatch = useDispatch()

    // console log the data from the backend
    useEffect(()=>{
        dispatch(loadBreakfastList())
    },[])

    const renderBreakfastList = (breakfastList) => {
        return breakfastList.map(breakfast =>{
            return (
                <tr>
                    <td>{breakfast.name}</td>
                    <td>{breakfast.total_calories}</td>
                    <td>{breakfast.carbs}</td>
                    <td>{breakfast.fat}</td>
                    <td>{breakfast.protein}</td>
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