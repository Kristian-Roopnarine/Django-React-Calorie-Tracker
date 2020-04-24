import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addBreakfast,addLunch,addDinner,addCheat,addSnacks} from '../../actions/nutrition'
import {Form,Col,Row,Button} from 'react-bootstrap'

const CreateFoodForm = (props) => {
    const [formData,setFormData] = useState({
        name:"",
        total_calories:"",
        fat:"",
        protein:"",
        carbs:"",
        date:null,
        category:props.category
    })

    const dispatch = useDispatch()

    const submitFood = (e) => {
        e.preventDefault()
        console.log(formData)
        if (formData.category === "B"){
            dispatch(addBreakfast(formData))
        } else if (formData.category === "L"){
            dispatch(addLunch(formData))
        } else if (formData.category === "D"){
            dispatch(addDinner(formData))
        } else if (formData.category === "S"){
            dispatch(addSnacks(formData))
        } else if (formData.category === "C"){
            dispatch(addCheat(formData))
        }

        setFormData({
            name:"",
            total_calories:"",
            fat:"",
            protein:"",
            carbs:"",
            date:null,
            category:props.category
        })
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
                        <Form.Control id="total_calories" size="sm" type="totalCalories" value={formData.total_calories} placeholder="Total Calories" onChange={(e) => updateFoodInput(e)}/> 
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
                        <Button variant="success" type="submit" size="sm" onClick={submitFood}>
                            Add Food
                        </Button>    
                    </td>
                
            </tr>

    )
}

export default CreateFoodForm