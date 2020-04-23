import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Redirect,Link } from 'react-router-dom'
import {logout} from '../actions/auth'
import {Container,Col,Row} from 'react-bootstrap'
import Snacks from './Snacks'
import Breakfast from './Breakfast'
import Cheat from './Cheat'
import Dinner from './Dinner'
import Lunch from './Lunch'
import TotalCalories from './TotalCalories'
import CreateFood from './forms/CreateFood'


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
    <TotalCalories />
    <Container fluid>
        <CreateFood />
        <Col xs={12} s={12} md={7}>
            <Breakfast />
            <Lunch />
            <Dinner />
            <Snacks />
            <Cheat />
        </Col>
    </Container>
    
    </>
    )
}


export default Home