import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadSnackList} from '../actions/nutrition'
import {Table} from 'react-bootstrap'




const Snacks = (props) => {
    const snacks = useSelector(state => state.nutrition.snacks)
    const dispatch = useDispatch()

    // console log the data from the backend
    useEffect(()=>{
        dispatch(loadSnackList())
    },[])

    const renderSnackList = (snacks) => {
        return snacks.map(snack =>{
            return (
                <tr>
                    <td>{snack.name}</td>
                    <td>{snack.total_calories}</td>
                    <td>{snack.carbs}</td>
                    <td>{snack.fat}</td>
                    <td>{snack.protein}</td>
                </tr>
            )
        })
    }
    return (
        <>
            <div>Snacks</div>
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
                    {renderSnackList(snacks)}
                </tbody>
            </Table>
        </>
    
    )
}


export default Snacks