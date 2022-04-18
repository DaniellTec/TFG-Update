import React from 'react'
import '../css/styles.css';

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import blacksad from '../images/home/1.jpg';
import face from '../images/home/2.jpg';
import lake from '../images/home/11.jpg';
import mountain from '../images/home/12.jpg';

import image1 from '../images/home/8.jpg';
import image2 from '../images/home/9.jpg';
import image3 from '../images/home/10.jpg';
import image4 from '../images/home/7.jpg';

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import CarouselPaint from '../components/CarouselArt';
import Footer from '../components/footer';

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
      <img src={blacksad} alt="" class="rounded img-fluid" width="400"/>
      <h5>Blacksad - Juan Dían Canales, Juanjo Guarnido</h5>
    </div>
 </div> 
</div>

 <div class="col-md-3">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={face} alt="" class="rounded center"/>
      <h5>Face - José Villaseñor</h5>
    </div>
 </div> 
</div> 
<div class="col-md-3">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={lake} alt="" class="rounded img-fluid" width="315"/>
      <h5>Lake - Den Belitsky</h5>
    </div>
 </div> 
</div>

 <div class="col-md-3">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={mountain} alt="" class="rounded center" width="295"/>
      <h5>Mountain - Unknown</h5>
    </div>
 </div> 
</div> 
</div>

<hr/>
<br/>

<h1 class="center">
      Catálogo
    </h1>
    <br/>

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
<br/>
<hr/>
<Footer/>
    </>
    
  );
};

export default Home;