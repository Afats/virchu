import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './myCards'
import { Row, Container } from 'react-bootstrap';


const domContainer = document.querySelector('#Cards');

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Row>
        <MyCard title="2,078" cap="CONTAINERS SHIPPED"/>
        <MyCard title="146,501" cap="ANNUAL VOLUNTEER HOURS"/>
        <MyCard title="134" cap="COUNTRIES SERVED"/>
      </Row>
    </Container>
  </React.StrictMode>,
  domContainer
);