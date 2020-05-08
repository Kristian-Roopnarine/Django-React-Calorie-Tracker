import React,{useEffect} from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import {getCalories} from '../actions/nutrition'
import {Doughnut} from 'react-chartjs-2'

const TotalCalories = () => {
    const auth = useSelector(state=>state.auth)
    const total = useSelector(state => state.nutrition.calories)
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getCalories())
    },[])

    const dataSet = {
        labels : ['Fat','Protein','Carbs'],
        datasets : [
            {
                label:'Calorie breakdown',
                backgroundColor:[
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                ],
                data:[total.fat,total.protein,total.carbs]
            }
        ]

    }

    const renderCalorieBreakdown = () => {
        return (
            <>
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
            </>
        )
    }

    return(
        <>
            <Container fluid className="mt-3">
                <Row>
                    <Col xs={12} md={8}>
                        <Card body>
                            <Row>   
                                <Doughnut 
                                    data={dataSet}
                                    options={{
                                        title:{
                                            display:true,
                                            text:"Today's calorie breakdown",
                                            fontSize:20
                                        
                                        },
                                        legend:{
                                            display:true,
                                            position:'right'
                                        }
                                    }}
                                
                                
                                />
                            </Row>
                        </Card>
                        
                    </Col>

                    <Col xs={12} md={3}>
                        <Card body className="text-center">
                            <h4>Daily Total Calories</h4>
                            <h6>{total.total ? total.total:0}</h6>   
                            <hr style={{width:"4rem"}} />
                            <h6>{auth.userCalorieGoal.daily_calories}</h6>
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TotalCalories