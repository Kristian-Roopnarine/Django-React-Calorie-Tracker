import React,{useState} from 'react'
import {Form,Col,Row,Button} from 'react-bootstrap'

const CreateFood = () => {
    const [formData,setFormData] = useState({
        name:"",
        totalCalories:"",
        fat:"",
        protein:"",
        carbs:"",
        date:null,
        category:""
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
        <>
            <Form inline onSubmit = {submitFood}>
                <Form.Group controlId="name">
                    <Form.Label>
                        Name
                    </Form.Label>
                    <Form.Control size="sm" type="name" value={formData.name} placeholder="Enter food name" onChange={(e) => updateFoodInput(e)}/>
                </Form.Group>

                <Form.Group controlId="totalCalories">
                    <Form.Label>
                        Total Cal.
                    </Form.Label>
                    <Form.Control size="sm" type="totalCalories" value={formData.totalCalories} placeholder="Total Calories" onChange={(e) => updateFoodInput(e)}/>
                </Form.Group>

                <Form.Group controlId="fat">
                    <Form.Label>
                        Fat
                    </Form.Label>
                    <Form.Control size="sm" type="fat" value={formData.fat} placeholder="Fat (g)" onChange={(e) => updateFoodInput(e)}/>
                </Form.Group>

                <Form.Group controlId="protein">
                    <Form.Label>
                        Protein
                    </Form.Label>
                    <Form.Control size="sm" type="protein" value={formData.protein} placeholder="Protein (g)" onChange={(e) => updateFoodInput(e)}/>
                </Form.Group>

                <Form.Group controlId="carbs">
                    <Form.Label>
                        Carbs
                    </Form.Label>
                    <Form.Control size="sm" type="carbs" value={formData.carbs} placeholder="Carbs (g)" onChange={(e) => updateFoodInput(e)}/>
                </Form.Group>

                <Form.Group controlId="date">
                    <Form.Label>
                        Date
                    </Form.Label>
                    <Form.Control size="sm" type="date" value={formData.date} placeholder="Date" onChange={(e) => updateFoodInput(e)}/>
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>
                        Category
                    </Form.Label>
                    <Form.Control size="sm" type="category" value={formData.category} placeholder="Category" onChange={(e) => updateFoodInput(e)}/>
                </Form.Group>

                <Button variant="primary" type="submit" size="sm">
                    Add Food
                </Button>    
            </Form>
        </>
    )
}

export default CreateFood