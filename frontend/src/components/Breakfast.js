import React from 'react'
import {Table} from 'react-bootstrap'

const Breakfast = (props) => {
    return (
    <>
        <div>Breakfast</div>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Calories</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                    <th>Protein</th>
                </tr>
            </thead>
        </Table>
    </>
    )
}


export default Breakfast