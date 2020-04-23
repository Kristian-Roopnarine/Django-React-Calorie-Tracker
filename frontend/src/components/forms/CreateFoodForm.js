import React,{useState} from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'

const CreateFoodForm = (props) => {
    const [formData,setFormData] = useState({
        name:"",
        totalCalories:"",
        fat:"",
        protein:"",
        carbs:"",
        date:null,
        category:props.category
    })

    const submitFood = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const updateFoodInput = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    return (
            <tr> 
                    <td>
                        <Form.Control size="sm" id="name" type="name" value={formData.name} placeholder="Enter food name" onChange={(e) => updateFoodInput(e)}/> 
                    </td>

                    <td>
                        <Form.Control id="totalCalories" size="sm" type="totalCalories" value={formData.totalCalories} placeholder="Total Calories" onChange={(e) => updateFoodInput(e)}/> 
                    </td>

                    <td>    
                        <Form.Control id="fat" size="sm" type="fat" value={formData.fat} placeholder="Fat (g)" onChange={(e) => updateFoodInput(e)}/>
                    </td>

                    <td>
                        <Form.Control size="sm" id="protein" type="protein" value={formData.protein} placeholder="Protein (g)" onChange={(e) => updateFoodInput(e)}/>
                    </td>

                    <td>
                        <Form.Control size="sm" id="carbs" type="carbs" value={formData.carbs} placeholder="Carbs (g)" onChange={(e) => updateFoodInput(e)}/>
                    </td>

                    <td>
                        <Button variant="primary" type="submit" size="sm" onClick={submitFood}>
                            Add Food
                        </Button>    
                    </td>
                
            </tr>

    )
}

export default CreateFoodForm