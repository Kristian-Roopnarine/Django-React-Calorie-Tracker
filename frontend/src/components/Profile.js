import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {Col,Card,Row} from 'react-bootstrap'
import {getUserWeight}  from '../actions/nutrition'
 


const Profile = () => {
    const userNutrition = useSelector(state => state.nutrition)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getUserWeight())
    },[])

    return (
        <div>
            {userNutrition.user_weight}
        </div>
    )
}

export default Profile