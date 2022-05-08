import React, {Component} from 'react';
import { Button,Row,Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

class dataHolding {

    constructor() {
        this.data = false;
        this.countryData = "";
    }

    getData(data) {
        this.data = data;
        console.log(data);
    }

    setData(){
        return this.data;
    }
    
    logdata(data){
        this.countryData = data;

    }

    theData(){
       return  this.countryData; 
    }
    
    charitiesList(){
        var charData = [];

        charData.push(
            <div>
            <hr></hr>
            <br></br>
            
        <Row>
            <hr></hr>
            <Col>  <p><a href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=9945" target="_blank">Project C.U.R.E</a>
            &#11088;&#11088;&#11088;</p></Col>
          <Button variant="info" size="sm" style={{marginRight:"10px"}}>Donate</Button></Row> 
          </div>
        );

        charData.push(
            <div>
            <hr></hr>
            <br></br>
            <Row>
                <hr></hr>
                <br></br>
                <Col>  <p><a href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=4763" target="_blank">World Medical Relief</a>
                &#11088;&#11088;&#11088;</p></Col>
              <Button variant="info" size="sm" style={{marginRight:"10px"}}>Donate</Button></Row> 
              </div>
        );


        charData.push(
            <div>
                <hr></hr>
                <br></br>
            <Row>
                
                <Col>  <p><a href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=9290" target="_blank">MedShare</a>
                &#11088;&#11088;&#11088;&#11088;</p></Col>
              <Button variant="info" size="sm" style={{marginRight:"10px"}}>Donate</Button></Row> 
              <br></br>
             </div>
        );




        {/* //charData.push(<br></br>)
        charData.push(<a href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=4763" target="_blank">World Medical Relief</a>)
        charData.push(<Button variant="info">info</Button>)
        //charData.push(<br></br>)
        charData.push(<p>&#11088;&#11088;&#11088;&#11088;</p>);
        charData.push(<a href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=9290" target="_blank">MedShare</a>)
        charData.push(<p>&#11088;&#11088;</p>);
        charData.push(<Button variant="info">info</Button>) */}

        return charData;
    }

}
export default new dataHolding;