import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image1 from '../images/carousel/image1.jpg';
import image2 from '../images/carousel/image2.jpg';
import image3 from '../images/carousel/imagetest.jpg';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className={image1}>Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className={image2}>Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className={image3}>Legend 3</p>
                </div>
            </Carousel>
        );
    }
});

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));