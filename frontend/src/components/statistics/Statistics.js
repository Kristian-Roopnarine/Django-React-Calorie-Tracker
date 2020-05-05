import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'


const Statistics = () => {
    const auth = useSelector(state => state.auth)
    // need to query backend for user total calories for the week
    // maybe break down these total calories for everyday
    
    // need to query for the weight of the user throughout the week/month

    // maybe query for how often a food was eaten this week?
    useEffect(()=>{
        
            
        const config = {
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Token ${auth.token}`
            }
        }
        
        axios.get('http://localhost:8000/api/30-day-calories',config)
        .then(res=>{
            console.log(res.data)
        })
    },[])

    return (
        <div>
            User Stats
        </div>
    )
}

export default Statistics