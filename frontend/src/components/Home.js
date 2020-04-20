import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Redirect,Link } from 'react-router-dom'
import {logout} from '../actions/auth'
import {Container} from 'react-bootstrap'
import Snacks from './Snacks'
import Breakfast from './Breakfast'
import Cheat from './Cheat'
import Dinner from './Dinner'
import Lunch from './Lunch'


const Home = (props) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const renderData = () => {

        if (auth.isLoading){
            return <h2>Loading..</h2>
        } else if (!auth.isAuthenticated){
            return <Redirect to="/login" />
        } else {
            return (<div><h1>welcome {auth.user.username}</h1></div>)
        }
    }

    return (
    <>
    {renderData()}
    <Container>
        <Breakfast />
        <Lunch />
        <Dinner />
        <Snacks />
        <Cheat />
    </Container>
    
    </>
    )
}


export default Home