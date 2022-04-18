import React from 'react'
import '../css/styles.css';

import artIcon from '../images/icons/art.jpg';
import Footer from '../components/footer';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Paint = () => {
  return (
    <>    
<br/>

<p><a href="/home">Home</a> / <a href="/paint">Pinturas</a></p><p/>

  <h1>
    Pinturas en venta
  </h1> 

<div class="selectors">
   <select class="btn btn-light">
      <option value="none" selected disabled hidden>Seleccione categoría</option>
      <option value="oil">Óleos</option>
      <option value="portrait">Retratos</option>
      <option value="abstract">Arte abstracto</option>
      <option value="landscape">Paisajes</option>
  </select>

  &nbsp;  &nbsp;  
  
  <select class="btn btn-light">
      <option value="none" selected disabled hidden>Ordenar por</option>
      <option value="high">Precio Ascendente</option>
      <option value="low">Precio Descendente</option>
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
      <img src={artIcon} alt="" class="rounded" width="220"/>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span>
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
        <span>$0.00</span><br/>
        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span>
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

export default Paint;