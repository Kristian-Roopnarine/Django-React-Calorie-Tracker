import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadLunchList} from '../actions/nutrition'
import {Table} from 'react-bootstrap'

const Lunch = (props) => {
    const lunchList = useSelector(state => state.nutrition.lunch)
    const dispatch = useDispatch()

    // console log the data from the backend
    useEffect(()=>{
        dispatch(loadLunchList())
    },[])

    const renderLunchList = (lunchList) => {
        return lunchList.map(lunch =>{
            return (
                <tr>
                    <td>{lunch.name}</td>
                    <td>{lunch.total_calories}</td>
                    <td>{lunch.carbs}</td>
                    <td>{lunch.fat}</td>
                    <td>{lunch.protein}</td>
                </tr>
            )
        })
    }
    return (
    <>
        <div>Lunch</div>
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
                {renderLunchList(lunchList)}
            </tbody>
        </Table>
    </>
    )
}


export default Lunch