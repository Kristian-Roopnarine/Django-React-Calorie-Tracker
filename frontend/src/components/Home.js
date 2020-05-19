import React from 'react'
import { Redirect,Link } from 'react-router-dom'
import {Container,Col,Row} from 'react-bootstrap'
import {connect} from 'react-redux'
import DailyFoodLog from './DailyFoodLog'
import TotalCalories from './TotalCalories'
import SearchFood from './SearchFood'

class Home extends React.Component {

    componentDidMount(){
        if (!this.props.auth.isAuthenticated){
            return <Redirect to='/login' />
        } else if (this.props.auth.isLoading){
            return <h2>Loading..</h2>
        } else {
            return
        }
    }

    render(){
            return (
                <>
                    <TotalCalories />
                    <Container fluid className="mt-3">
                        <Row>
                            <Col xs={12} s={12} md={{span:6,offset:1}}>
                                <DailyFoodLog />
                            </Col>
                            <Col xs={12} s={12} md={{span:3,offset:1}}>
                            </Col>
                        </Row>
                    </Container>
                </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps)(Home)