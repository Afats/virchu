import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import ControlledCarousel from './carousel'
import MyCard from './myCards'
import reportWebVitals from './reportWebVitals';
import { Row, Container } from 'react-bootstrap';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ControlledCarousel />
    <Container>
      <Row>
        <MyCard title="2,078" cap="CONTAINERS SHIPPED"/>
        <MyCard title="146,501" cap="ANNUAL VOLUNTEER HOURS"/>
        <MyCard title="134" cap="COUNTRIES SERVED"/>
      </Row>
    </Container>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
