import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {addFood} from '../actions/nutrition'
import {Form,Col,Row,Button,Card} from 'react-bootstrap'


const SearchFood = (props) => {

    const [food,setFood] = useState({
        name:"",
        total_calories:0,
        fat:0,
        protein:0,
        carbs:0,
        category:""
    })

    const dispatch = useDispatch()

    const submitFood = () => {
        console.log(food)
    }

    const clearInput = () => {
        setFood({
            name:"",
            total_calories:0,
            fat:0,
            protein:0,
            carbs:0,
            category:""
        })
    }

    return (
        <Card body>
            Search for Food here :
            <br/>
            <input type="text" value={food.name} name="name" onChange={(e) => setFood({...food,"name":e.target.value})} className="form-control"/>
            <p>Fat: {food.fat}</p>
            <p>Protein: {food.protein}</p>
            <p>Carbs: {food.carbs}</p>
            <p>Category: {food.category}</p>

            <Button variant="success" size="sm" onClick={submitFood} className="mr-2">
                            Add Food
            </Button> 

            <Button variant="secondary" size="sm" onClick={clearInput}>
                Clear
            </Button>   
        </Card>
    )
}

export default SearchFood