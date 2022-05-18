
import '../css/styles.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";

import ReactTooltip from 'react-tooltip';

//import Slider from "react-slick";


import blacksad from '../images/home/1.jpg';
import face from '../images/home/2.jpg';
import lake from '../images/home/11.jpg';
import mountain from '../images/home/12.jpg';



import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import CarouselPaint from '../components/CarouselArt';
import Footer from '../components/footer';
import Component from '../components/swipetoslide';

const Home = () => {
  return (
    <> 

    <CarouselPaint />       

    <br/>
    <center>
    <button class="button"> <Link to="/paint" style={{ color: "black" }}> Pinturas </Link></button>
    <button class="button"> <Link to="/abstract" style={{ color: "black" }}> Arte abstracto </Link>  </button>
    <button class="button"> <Link to="/oil" style={{ color: "black" }}> Óleos </Link> </button>
    <button class="button"> <Link to="/landscape" style={{ color: "black" }}> Paisajes </Link> </button>
    <button class="button"> <Link to="/colection" style={{ color: "black" }}> Colecciones </Link> </button>
    <button class="button"> <Link to="/photo" style={{ color: "black" }}> Fotografías </Link> </button>
    <button class="button"> <Link to="/featured" style={{ color: "black" }}> Destacados </Link> </button>
    </center>
    <hr/>
    <br/>

    <h1 class="center">
      Destacados
    </h1>


<div class="row">
  <div class="col-md-3">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={blacksad} alt="" class="rounded img-fluid" />
      <h5>Blacksad - Juan Dían Canales, Juanjo Guarnido</h5>
    </div>
 </div> 
</div>

 <div class="col-md-3">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={face} alt="" class="rounded img-fluid"/>
      <h5>Face - José Villaseñor</h5>
    </div>
 </div> 
</div> 
<div class="col-md-3">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={lake} alt="" class="rounded img-fluid"  />
      <h5>Lake - Den Belitsky</h5>
    </div>
 </div> 
</div>

 <div class="col-md-3">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={mountain} alt="" class="rounded img-fluid"  />
      <h5>Mountain - Unknown</h5>
    </div>
 </div> 
</div> 
</div>

<hr/>
<br/>

<h1 class="center" data-tip data-for="catalogue">
      Catálogo
    </h1>
    <ReactTooltip id="catalogue">
      Haz click y desliza con el mouse.
    </ReactTooltip>
    <br/>

<Component/>

<Footer/>
    </>
    
  );
};

export default Home;