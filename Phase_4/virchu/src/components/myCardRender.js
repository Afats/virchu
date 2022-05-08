import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './myCards'
import Parser from 'html-react-parser';
import { Row, Container } from 'react-bootstrap';


const domContainer = document.querySelector('#Cards');

var content = `
    <Container>
      <Row>
        <MyCard title="2,078" cap="CONTAINERS SHIPPED"/>
        <MyCard title="146,501" cap="ANNUAL VOLUNTEER HOURS"/>
        <MyCard title="134" cap="COUNTRIES SERVED"/>
      </Row>
    </Container>
`;

function Card_comp() {
    return (
        <div className="content">{Parser(content)}</div>
    );
}

export default Card_comp;
