import React from 'react'
import '../css/styles.css';

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";





import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import CarouselPaint from '../components/CarouselArt';
import Footer from '../components/footer';
import blacksad from '../images/home/1.jpg';

const Home = () => {
  return (
    <> 

    {/*
    <h1 class="center">
      Destacados
    </h1>
 <h1>Zoom on Hover</h1>
<p>Hover over the div element.</p>
  
<div class="zoom col-md-3"><img src={blacksad}/></div>
*/}

<br/><br/>
<p><a href="/home">Home</a> / <a href="/paint">Pinturas</a> / <a href="/testProduct">Cuadro 1</a> </p><p/>
<div class="row">
  <div class="col-md-3 zoom">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={blacksad} alt="" class="rounded img-fluid" width="400"/>
    </div>
 </div> 
</div>
</div>


    </>
    
  );
};

export default Home;