import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../images/carousel/image1.jpg';
import image2 from '../images/carousel/image4.jpg';
import image3 from '../images/carousel/image7.jpg';

const CarouselArt = () => {
  return (
    <Carousel fade={false} pause={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselArt;