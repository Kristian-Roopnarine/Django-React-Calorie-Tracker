import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Navbar,Nav,Button} from 'react-bootstrap'
import {logout} from '../actions/auth'
const NavBar = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    return (
        <>
        <Navbar variant="light" style={{backgroundColor:"rgba(123, 239, 178, 1)"}}>
            {auth.isAuthenticated ? <Navbar.Brand href="/">Welcome {auth.user.username}</Navbar.Brand> :<Navbar.Brand href="#home">Welcome</Navbar.Brand> }
            
            <Nav className="mr-auto">
                <Nav.Link className="text-dark" href="/profile">Your Profile</Nav.Link>
                <Nav.Link className="text-dark" href="/stats">Your Stats</Nav.Link>
            </Nav>
            <Button inline variant="outline-primary" onClick={() => dispatch(logout())}> Logout</Button>
        </Navbar>
      </>
    )
}

export default NavBar