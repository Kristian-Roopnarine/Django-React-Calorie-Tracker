import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Redirect,Link } from 'react-router-dom'
import {Container,Col,Row} from 'react-bootstrap'
import Snacks from './Snacks'
import Breakfast from './Breakfast'
import Cheat from './Cheat'
import Dinner from './Dinner'
import Lunch from './Lunch'
import TotalCalories from './TotalCalories'
import SearchFood from './SearchFood'




const Home = (props) => {
    const auth = useSelector(state => state.auth)

    const renderData = () => {

        if (auth.isLoading){
            return <h2>Loading..</h2>
        } else if (auth.isAuthenticated){
            return (<div><h1>welcome {auth.user.username}</h1></div>)
        } else {
            return <Redirect to="/login" />
        }
    }

    return (
    <>
    {renderData()}
    <TotalCalories />
    <Container fluid className="mt-3">
        <Row>
            <Col xs={12} s={12} md={{span:6,offset:1}}>
                <Breakfast />
                <Lunch />
                <Dinner />
                <Snacks />
                <Cheat />
            </Col>
            <Col xs={12} s={12} md={{span:3,offset:1}}>
                <SearchFood />
            </Col>
        </Row>
    </Container>
    
    </>
    )
}


export default Home