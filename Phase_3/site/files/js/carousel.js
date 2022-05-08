import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import image from "./images/child.jpeg";
import vaccineImage from "./images/vaccine.jpeg";
import waterImage from "./images/waterI.jpeg";
import "./App.css";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", paddingLeft: "20px", paddingRight: "20px" }}>
                        <h3>Mauritius coronavirus cases rise by 50%.</h3>
                        <p>Mauritians need your help to combat their rising covid cases. Donate today to help with ICU supplies and vaccines.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel"

                    src={vaccineImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", paddingLeft: "20px", paddingRight: "20px" }}>
                        <h3>India vaccine support</h3>
                        <p>Many countries have already provided COVID vaccines for a large percentage of its populace. Only 4.76% have received, they need your help</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel"
                    src={waterImage}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", paddingLeft: "20px", paddingRight: "20px" }}>
                        <h3>$80,000 rasied to aid Salmonella Outbreak in the Congo</h3>
                        <p>
                            The WHO has started a fundraise last week to provide the people of the Congo with clean water and build water cleansing plants.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
}

export default ControlledCarousel;
// render(<ControlledCarousel />);