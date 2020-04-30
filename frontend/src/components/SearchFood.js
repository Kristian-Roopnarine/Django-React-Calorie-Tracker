import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import {addFood} from '../actions/nutrition'
import {Form,Col,Row,Button,Card} from 'react-bootstrap'


async function getData(url,subKey){
    const response = await fetch(url,{
        method:"GET",
        mode:'cors',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Accept':'application/json',
            "Ocp-Apim-Subscription-Key": subKey
        }
    })
    return response.json()
}

const SearchFood = (props) => {
    const url = `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${props.usdaKey}`
    const url2 = "/foods?query="
    const subKey = process.env.REACT_APP_ESHA_API_KEY
    const [food,setFood] = useState({
        name:"",
        total_calories:0,
        fat:0,
        protein:0,
        carbs:0,
        category:""
    })

    const getFood = (food) => {
        
        /*
        const headers= {
                'Access-Control-Allow-Origin': 'https://nutrition-api.esha.com',
                'Content-Type':'application/x-www-form-urlencoded',
                "Ocp-Apim-Subscription-Key": subKey
            }
        */
        const body = {
            'query':`${food.name}`
        }

        const queryUrl = url2+food.name
        getData(queryUrl,subKey).then(data=>console.log(data))
    }

    const dispatch = useDispatch()

    const submitFood = () => {
        getFood(food)
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