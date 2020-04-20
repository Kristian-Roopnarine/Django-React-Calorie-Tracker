import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {loadCheatList} from '../actions/nutrition'
import {Table} from 'react-bootstrap'

const Cheat = (props) => {
    const cheatList = useSelector(state => state.nutrition.cheat)
    const dispatch = useDispatch()

    // console log the data from the backend
    useEffect(()=>{
        dispatch(loadCheatList())
    },[])

    const renderCheatList = (cheatList) => {
        return cheatList.map(cheat =>{
            return (
                <tr>
                    <td>{cheat.name}</td>
                    <td>{cheat.total_calories}</td>
                    <td>{cheat.carbs}</td>
                    <td>{cheat.fat}</td>
                    <td>{cheat.protein}</td>
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

