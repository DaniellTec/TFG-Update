import React, { Component } from "react";
import Slider from "react-slick";


import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import image1 from '../images/home/8.jpg';
import image2 from '../images/home/9.jpg';
import image3 from '../images/home/10.jpg';
import image4 from '../images/home/7.jpg';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div class="row">
<div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image1} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div>
</div>
          </div>
          <div>
          <div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image2} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div> 
          </div>
          <div>
          <div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image3} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div> 
          </div>
          <div>
          <div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image4} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div>
          </div>
          <div>
          <div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image1} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div>
          </div>
          <div>
          <div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image2} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div>
          </div>
          <div>
          <div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image3} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div> 
          </div>
          <div>
          <div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image4} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div>
          </div>
          <div>
          <div class="col-md-3">
  <div class="card">
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image4} alt="" class="rounded"/>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
      <span>$0.00</span><br/>
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span>
      {/*<div class="p-3 art text-center text-dark mt-3 cursor">
              <hr/>
        <span class="text-uppercase">Añadir al carrito</span>
      </div>*/}
    </div>
  </div>
</div>
</div> 
</div>
          </div>
        </Slider>
      </div>
    );
  }
}
