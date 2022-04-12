import React from 'react'
import '../css/styles.css';

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import blacksad from '../images/home/1.jpg';
import face from '../images/home/2.jpg';

import image1 from '../images/home/8.jpg';
import image2 from '../images/home/9.jpg';
import image3 from '../images/home/10.jpg';
import image4 from '../images/home/7.jpg';

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import CarouselArt from '../components/CarouselArt';
import Footer from '../components/footer';

const Home = () => {
  return (
    <> 

    <CarouselArt />       

    <br/>
    <center>
    <button class="button"> <Link to="/card" style={{ color: "black" }}> Pinturas </Link></button>
    <button class="button"> <Link to="/art" style={{ color: "black" }}> Arte abstracto </Link>  </button>
    <button class="button"> <Link to="/art" style={{ color: "black" }}> Óleos </Link> </button>
    <button class="button"> <Link to="/art" style={{ color: "black" }}> Paisajes </Link> </button>
    <button class="button"> <Link to="/art" style={{ color: "black" }}> Colecciones </Link> </button>
    <button class="button"> <Link to="/art" style={{ color: "black" }}> Esculturas </Link> </button>
    <button class="button"> <Link to="/art" style={{ color: "black" }}> Destacados </Link> </button>
    </center>
    <hr/>
    <br/>

    <h1 class="center">
      Destacados
    </h1>
 {/*}   
<div class="center">
    <div class="row">
  <div class="col-md-5">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={blacksad} alt="" class="rounded"/>
      <h5>Blacksad</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Juan Dían Canales, Juanjo Guarnido</span>
      </div>  
    </div>
  </div>
 </div> 
</div>

 <div class="col-md-5">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={face} alt="" class="rounded"/>
      <h5>Face</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">José Villaseñor</span>
      </div>  
    </div>
  </div>
 </div> 
</div>    
</div>
</div>*/}

    <table>
  <tr>
  <td>
      <div>
      <button className="imageProductButton"><br/><img src={blacksad} class="img-fluid" width="400"/></button> <br/><br/>
      <p class="featured">Blacksad - Juan Dían Canales, Juanjo Guarnido</p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div>
      <button className="imageProductButton"><br/><img src={face} class="img-fluid" width="400"/></button> <br/><br/>
      <p class="featured">Face - José Villaseñor</p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
  </tr>
 <tr>
</tr>
</table>

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
        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
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
        <span><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>
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
        <span><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
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
        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span>
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