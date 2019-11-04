import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


let People = ({ people }) => {
    return (
        <div className="container">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{people.name}</Card.Title>
                    <Card.Text>
                        gender: {people.gender} <br></br>
                        age: {people.age} <br></br>
                        url: {people.url}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}



export default People
