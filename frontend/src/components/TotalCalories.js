import React,{useEffect} from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {getCalories} from '../actions/nutrition'

const TotalCalories = () => {
    const total = useSelector(state => state.nutrition.calories)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getCalories())
    },[])

    return(
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} md={8}>
                        <Card body>
                            <Row>
                                <Col className="text-center">
                                    <h3>Daily Total Fat</h3>
                                    <h4>{total.fat ? total.fat + "g" : 0 + "g"}</h4>
                                </Col>
                                    
                                <Col className="text-center">
                                    <h3>Daily Total Protein</h3>
                                    <h4>{total.protein ? total.protein +"g" : 0 + "g"}</h4>
                                </Col>

                                <Col className="text-center">
                                    <h3>Daily Total Carbs</h3>
                                    <h4>{total.carbs ? total.carbs + "g" : 0 + "g"}</h4>
                                </Col>
                            </Row>
                        </Card>
                        
                    </Col>

                    <Col xs={12} md={3}>
                        <Card body className="text-center">
                            <h3>Daily Total Calories</h3>
                            <h4>{total.total ? total.total:0}</h4>    
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TotalCalories