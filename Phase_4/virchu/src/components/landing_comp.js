import React from 'react';
import Parser from 'html-react-parser';

var content = `
<!-- Masthead-->
<!--<div class="ghost">-->
<header class="masthead">
    <div class="container d-flex h-100 align-items-center ">

        <Row>
            <div class="mx-auto text-center">
                <h1 class="mx-auto my-0 text-uppercase">VIRCHU</h1><sub style="color:white; font-size:14px">BETA</sub>
                <h2 class="text-black-50 mx-auto mt-2 mb-5">There are millions affected by the pandemic and other
                    outbreaks. Help people around the world lead healthier, happier lives.</h2>
                <a class="btn btn-primary js-scroll-trigger" href="#globe">See who's affected</a>
        </Row>
        <Row>
            <div class="mt-5 w-75 mx-auto ">
                <div class="d-flex flex-row bd-highlight mb-3  ">
                    <div class="card mr-5 ml-5 neo-card border-0" style="width: 18rem;">
                        <div class="card-body text-white">
                            <h5 class="card-title h3">2,078</h5>
                            <p class="card-text">CONTAINERS SHIPPED
                            </p>
                        </div>
                    </div>

                    <div class="card card mr-5 neo-card border-0" style="width: 18rem;">
                        <div class="card-body text-white ">
                            <h5 class="card-title  h3">146,501
                            </h5>
                            <p class="card-text">ANNUAL VOLUNTEER HOURS
                            </p>
                        </div>
                    </div>

                    <div class="card card mr-5 neo-card border-0" style="width: 18rem;">
                        <div class="card-body text-white">
                            <h5 class="card-title  h3">134
                            </h5>
                            <p class="card-text">COUNTRIES SERVED
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Row>

    </div>
    </div>
</header>
`;


function Landing_Comp() {
    return (
        <div className="content">{Parser(content)}</div>
    );
}


export default Landing_Comp;
