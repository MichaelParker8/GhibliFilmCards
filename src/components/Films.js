import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


let Films = ({ films }) => {
    return (
        <div className="container">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{films.title}</Card.Title>
                    <Card.Text>
                        {films.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}



export default Films
