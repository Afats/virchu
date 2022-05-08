import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'



function MyCards(props) {
    return(
        <Card bg="success" text="white"  style={{ width: '18rem' }} style={{textAlignVertical: "center",textAlign: "center", margin: "auto"}}  >
        <Card.Body>
            <Card.Title >{props.title}</Card.Title>
            <Card.Text>
            {props.cap}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}


export default MyCards