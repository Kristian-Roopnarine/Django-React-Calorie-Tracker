import React from 'react'
import CreateFoodForm from './forms/CreateFoodForm'
import EditFoodForm from './forms/EditFoodForm'
import {Table,Form,Button} from 'react-bootstrap'

import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const FoodTable = (props) => {

    const renderFoodList = (foodList) => {
        return foodList.map(food =>{
            return (
                <>
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.total_calories}</td>
                        <td>{food.carbs}</td>
                        <td>{food.fat}</td>
                        <td>{food.protein}</td>
                        <td>
                            <button onClick={()=>props.onClick(food)} style={{border:"none",background:"none"}}><FontAwesomeIcon icon={faTrash} /></button>
                            <button onClick= {()=> console.log(food) } style={{border:"none",background:"none"}}><FontAwesomeIcon icon={faEdit}/></button>
                        </td>
                    </tr>
                    <EditFoodForm food={food}/>
                </>

                
            )
        })
    }
    return (
        <>
            <Table striped bordered hover responsive size="sm">
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
                    <CreateFoodForm category={props.category}/>
                    {renderFoodList(props.foodList)}
                    
                </tbody>
            </Table>
        </>
    )
}

export default FoodTable