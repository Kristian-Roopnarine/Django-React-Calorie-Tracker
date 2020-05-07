import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import {Col,Card,Row,Form,Button,Container} from 'react-bootstrap'
import {getUserWeight,updateUserWeight}  from '../actions/nutrition'
import {getProfileData,updateProfileData}  from '../actions/auth'
import Statistics from './statistics/Statistics'
 


const Profile = () => {
    //const userNutrition = useSelector(state => state.nutrition)
    //const calorieGoal = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [updatedWeight,setUpdatedWeight] = useState(0)
    const [updatedCalorieGoal,setCalorieGoal] = useState(0)
    

    // form to update daily calories
    const onWeightUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUserWeight(updatedWeight))
        setUpdatedWeight("")
    }

    // form to update current weight
    const onCalorieUpdate = (e) => {
        e.preventDefault()
        // send to profile api
        dispatch(updateProfileData(updatedCalorieGoal))
        setCalorieGoal("")
    }


    return (
        <>
            <Container className='mt-3'>
                <Row>
                    <Col xs={{span:4,offset:1}}>
                        <Card body>
                            <Form onSubmit={onCalorieUpdate}>
                                <Form.Group controlId="calorie-goal">
                                    <Form.Label>Update Calorie Goal</Form.Label>
                                    <Form.Control 
                                        as="input" 
                                        placeholder="Update calorie goal"
                                        value={updatedCalorieGoal}
                                        onChange = {(e)=>setCalorieGoal(e.target.value)}
                                        />
                                        
                                </Form.Group>
                                <Button type="submit" variant="success" size="sm">Update Calorie Goal</Button>
                            </Form>
                        </Card>
                    </Col>

                    <Col xs={{span:4,offset:2}} >
                        <Card body>
                            <Form onSubmit={onWeightUpdate}>
                                <Form.Group controlId="weight" >
                                    <Form.Label>Update Current Weight</Form.Label>
                                    <Form.Control 
                                        as="input" 
                                        placeholder="Record current weight" 
                                        value={updatedWeight}
                                        onChange = {(e)=>setUpdatedWeight(e.target.value)}
                                        />
                                </Form.Group>
                                <Button type="submit" variant="success" size="sm">Update Weight</Button>
                            </Form>
                        </Card>
                    </Col>
                        
                    
                </Row>
            </Container>

            <Statistics />
            
        </>
    )
}

export default Profile