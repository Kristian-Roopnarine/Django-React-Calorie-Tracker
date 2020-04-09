import React, {Fragment,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useAlert} from 'react-alert'



const Alerts = (props) =>{
    const alert = useAlert()
    const messages = useSelector(state => state.msg)
    const status = useSelector(state => state.status)
    const dispatch = useDispatch() 

    useEffect(()=>{
        alert.show("It works")
    },[])

    return (
        <>
        </>
    )
}

export default Alerts