import React from 'react';
import Parser from 'html-react-parser';


var nav = `
<style>
.caBB {
    background: #ee9ca7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to top,
        #EFC4C5,
        #f1e2e4
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to top,
        #EFC4C5,
        #f1e2e4
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-position: center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
}
</style>

<div class="caBB">
<div class="container ">
    <div class="w-100 h-100 mx-auto p-4">


        <div class="mx-auto text-center">
        <br></br>
        <br></br>
        <h1 style="text-align: center; color: white;">Trending</h1>
              <h2 class="text-black-50 mx-auto mt-2 mb-5">The lastest breaking news about outbeak-related news from around the world.</h2>

        <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 h-100" src="./child.jpeg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <div style="background-color:rgba(0, 0, 0, 0.5)">
                            <h3>Mauritius coronavirus cases rise by 50%.</h3>
                            <p>Mauritians need your help to combat their rising covid cases. Donate today to
                                help with ICU supplies and vaccines.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block  w-100 h-100" src="./vaccine.jpeg" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                        <div style="background-color:rgba(0, 0, 0, 0.5)">
                            <h3>India vaccine support</h3>
                            <p>Many countries have already provided COVID vaccines for a large percentage of its
                                populace. Only 4.76% have received, they need your help</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block  w-100 h-100" src="./waterI.jpeg" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block">
                        <div style="background-color:rgba(0, 0, 0, 0.5)">
                            <h3>$80,000 rasied to aid Salmonella Outbreak in the Congo</h3>
                            <p>
                                The WHO has started a fundraise last week to provide the people of the Congo
                                with clean water and build water cleansing plants.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>

</div>

`;


function Carousel_Comp() {
    return (
        <div className="content">{Parser(nav)}</div>
    );
}


export default Carousel_Comp;



{/* <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img class="d-block w-100 h-100" src="./assets/img/child.jpeg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
            <div style="background-color:rgba(0, 0, 0, 0.5);paddingLeft:20px; paddingRight=20px">
                <h3>Mauritius coronavirus cases rise by 50%.</h3>
                <p>Mauritians need your help to combat their rising covid cases. Donate today to
                    help with ICU supplies and vaccines.</p>
            </div>
        </div>
    </div>
    <div class="carousel-item">
        <img class="d-block  w-100 h-100" src="./assets/img/vaccine.jpeg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
            <div style="background-color:rgba(0, 0, 0, 0.5);paddingLeft:20px; paddingRight=20px">
                <h3>India vaccine support</h3>
                <p>Many countries have already provided COVID vaccines for a large percentage of its
                    populace. Only 4.76% have received, they need your help</p>
            </div>
        </div>
    </div>
    <div class="carousel-item">
        <img class="d-block  w-100 h-100" src="./assets/img/waterI.jpeg" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
            <div style="background-color:rgba(0, 0, 0, 0.5);paddingLeft:20px; paddingRight=20px">
                <h3>$80,000 rasied to aid Salmonella Outbreak in the Congo</h3>
                <p>
                    The WHO has started a fundraise last week to provide the people of the Congo
                    with clean water and build water cleansing plants.
                </p>
            </div>
        </div>
    </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>
</div> */}
