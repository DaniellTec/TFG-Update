import React from 'react'
import '../css/styles.css';

import artIcon from '../images/icons/art.jpg';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import Footer from '../components/footer';

import image1 from '../images/home/7.jpg';

const Photo = () => {
  return (
    <> 
<br/>

<p><a href="/home">Home</a> / <a href="">Fotografía</a></p><p/>

  <h1 class="left">
    Fotografías en venta
  </h1>

<div className='selectors'>
   <select class="btn btn-light">
      <option value="none" selected disabled hidden>Seleccione categoría</option>
      <option value="portrait">Retratos</option>
      <option value="landscape">Paisajes</option>
      <option value="old">Antiguos</option>
      <option value="modern">Modernos</option>
    </select>

      &nbsp;  &nbsp;  

   <select class="btn btn-light">
      <option value="none" selected disabled hidden>Ordenar por</option>
      <option value="oil">Ordenar por</option>
      <option value="high">Precio Ascendente</option>
      <option value="low">Precio Descendennte</option>
      <option value="size">Tamaño</option>
      <option value="review">Valoración</option>
    </select>
  </div>

  <br/>

    <div class="row">
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img   src={image1} alt="" class="rounded" width="220"/>
      <h5>
      <button>Titulo</button></h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
          <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div>

 <div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div> 

<div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div> 

<div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>   <br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div>
</div>
<br/>


<div class="row">
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div>

 <div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div> 

<div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div> 
<div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div>
</div>
<br/>


<div class="row">
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div>

 <div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
       
        <span class="color"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div> 

<div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div> 

<div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div>
</div>
<br/>



<div class="row">
  <div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div>

 <div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div> 

<div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div> 

<div class="col-md-3">
    <div class="card">
      <div class="card-body">
      <div class="product-2 align-items-center p-2 text-center">
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span><br/>
        <span>$0.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
         <button class="text-uppercase buttonPaint">Añadir al carrito</button>
        </div>
      </div>
    </div>
  </div>
 </div> 
</div>
</div>
<br/>
<Footer/>
    </>
  );
};

export default Photo;