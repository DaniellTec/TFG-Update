import React, { Component } from "react";
import Slider from "react-slick";
import ReactTooltip from 'react-tooltip';

import image1 from '../images/home/8.jpg';
import image2 from '../images/home/9.jpg';
import image3 from '../images/home/10.jpg';
import image4 from '../images/home/7.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

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
<div>
  <div>
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image1} alt="" class="rounded" data-tip data-for="img1"/>
    <ReactTooltip id="img1">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
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
          <div >
 


  <div>
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image3} alt="" class="rounded" data-tip data-for="img1"/>
    <ReactTooltip id="img1">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
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
          <div  >
  <div>
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image4} alt="" class="rounded"data-tip data-for="img1"/>
    <ReactTooltip id="img1">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
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
          <div  >
  <div>
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image1} alt="" class="rounded" data-tip data-for="img1"/>
    <ReactTooltip id="img1">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
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
          <div  >
  <div>
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image2} alt="" class="rounded" data-tip data-for="img1"/>
    <ReactTooltip id="img1">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
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
          <div  >
  <div>
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image3} alt="" class="rounded" data-tip data-for="img1"/>
    <ReactTooltip id="img1">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
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
          <div  >
  <div>
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image4} alt="" class="rounded" data-tip data-for="img1"/>
    <ReactTooltip id="img1">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
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
          <div  >
  <div>
    <div class="card-body">
    <div class="product-2 align-items-center p-2 text-center">
    <img src={image4} alt="" class="rounded" data-tip data-for="img1"/>
    <ReactTooltip id="img1">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <h5>Titulo</h5>
    <div class="mt-3 info">
      <span class="text-1 d-block">Descripción</span>
      <span class="text-1 center">Text</span>
    </div>  
    <div class="cost mt-3 text-dark">
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
