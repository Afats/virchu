import React from 'react';
//import axios from 'axios';
import ReactDOM, { render } from 'react-dom';
import Globe from 'react-globe.gl'; // npm install react-globe.gl
import Sidebar from "react-sidebar";
import * as d3 from "d3"; // npm install d3
//import Popup from '../components/Popup';
import {popupBox} from './Popup';
import LeftsdBar from './leftSidebar';
import $ from 'jquery';
import jQuery from 'jquery';
import d from "./dataHolder";

// const express = require('express');
// const http = require('http');


const { useState, useEffect, useMemo } = React;

const World = () => {
  const [countries, setCountries] = useState({ features: []});
  const [hoverD, setHoverD] = useState();
  const [markers, setMarkers]  = useState([]);

  const url = "https://cvpgorqsib.execute-api.ap-southeast-2.amazonaws.com/D1/api?location=";


  useEffect(() => {
    // load data
    fetch('./data.geojson').then(res => res.json()).then(setCountries);
    fetch('./markers.json').then(res => res.json())
    .then(setMarkers);
  }, []);

  const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);

  // GDP per capita (avoiding countries with small pop)
  const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

  const maxVal = useMemo(
    () => Math.max(...countries.features.map(getVal)),
    [countries]
  );
  colorScale.domain([0, maxVal]);

/*-----------------------------------*/

const apiData = async(url, country) => {
     url += country;
     console.log(url);

    // http.createServer(onRequest).listen(8000);
    //
    // function onRequest(client_req, client_res) {
    //   console.log('serve: ' + client_req.url);
    //
    //   var options = {
    //     hostname: 'www.google.com',
    //     port: 80,
    //     path: client_req.url,
    //     method: client_req.method,
    //     headers: client_req.headers
    //   };
    //
    //   var proxy = http.request(options, function (res) {
    //     client_res.writeHead(res.statusCode, res.headers)
    //     res.pipe(client_res, {
    //       end: true
    //     });
    //   });
    //
    //   client_req.pipe(proxy, {
    //     end: true
    //   });
    // }
}

    // console.log(JSON.stringify(deets)); // Output the data in the terminal

     // const request = require('request')
     //    request(url, function (
     //      error,
     //      response,
     //      body
     //    ) {
     //      console.error('error:', error)
     //      console.log('body:', body)
     //    })


//      $.ajax({
//         url: 'proxy.php',
//         type: 'GET',
//         dataType: 'json',
//         contentType: 'application/json',
//         data: {
//         address: url
//         },
//         success: function(res) {
//             console.log(res);
//             alert(JSON.stringify(res));
//         },
//         error: function(xhr, ajaxOptions, thrownError){
//             alert("Cannot get data");
//             alert(xhr.status);
//             alert(thrownError);
//         }
//     });
// }

  /*---------------------------*/

  var countryy;
  var retvals = []

  var retvals = [];
  var retval;
  function charityDeets(country) {
       countryy = country;
       var  retval = country;
       //retvals.push(retval);
       //var data;
       var ret;
       //console.log(retval);
       retvals = []


       //var ret;

       $.getJSON("./cData.json", function(json) {
             retval = country;
             var data = json["data"];
             var prevVal = '';

             //console.log(data[0]["reports"][0]["location"]);

             for(var i = 0; i < data.length;  i++){
                 //console.log(data[i]["charityName"]);
                 //console.log(countryy);
                 var loc = data[i]["reports"][0]["location"].toString();
                 if (loc.includes(countryy.toString())) {
                     //console.log(data[i]["charityName"]);
                    if(prevVal != JSON.stringify(data[i]["headline"])){
                      retvals.push(<tr>{JSON.stringify(data[i]["headline"])}</tr>)
                    }

                     //showCharity();
                    prevVal = JSON.stringify(data[i]["headline"]);
                 }

                 if(retvals.length == 5){
                   break;
                 }
             }

             //return data;
             //ret = retvals;

         });

         //return ret;
         //console.log(retval);
         //openPopup(retval["responseJSON"], true);
         d.logdata(retvals)
         openPopup(null,null)
         
   }


 const getAlt = d => d.elevation * 5e-5;

 const getTooltip = d => `
 <div style="text-align: center">
     <div><b>${d.name}</b>, ${d.country}</div>
     <div>Elevation: <em>${d.elevation}</em>m</div>
 </div>
 `;

  function openPopup(){
  
  d.getData(true);
  
  ReactDOM.render(
      <LeftsdBar openVal={d.setData()} data={d.theData()} cData={d.charitiesList()}/>,
    document.getElementById('left_sidebar')
  );
  // d.getData(true)
 

 }



  return <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    //backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    backgroundImageUrl="./image.png"
    onGlobeClick={() => openPopup('', false)}
    lineHoverPrecision={0}

    pointsData={markers}
    pointLat="lat"
    pointLng="lon"
    pointAltitude={getAlt}
    pointRadius={0.50}
    pointColor={() => 'rgba(219, 10, 91, 1)'}
    pointLabel={getTooltip}
    //onPointClick={() => openPopup()}
    //onPointHover={getTooltip}

    labelLat="lat"
    labelLng="lon"
    labelText="name"
    labelSize={0.15}
    labelResolution={1}

    polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
    polygonAltitude={d => d === hoverD ? 0.06 : 0.02}
    polygonCapColor={d => d === hoverD ? 'steelblue' : colorScale(getVal(d))}
    polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
    polygonStrokeColor={() => '#111'}
    polygonLabel={({ properties: d }) => `
      <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
      GDP: <i>${d.GDP_MD_EST}</i> M$<br/>
      Population: <i>${d.POP_EST}</i>
    `}
    onPolygonHover={setHoverD}
    //onPolygonClick={(d) => openPopup(`${d.properties.ADMIN}`, true)}
    onPolygonClick={d => charityDeets(`${d.properties.ADMIN}`)}
    //onPolygonClick={d => apiData(`${d.properties.ADMIN}`)}
    polygonsTransitionDuration={300}

  />;
};

export default World;
