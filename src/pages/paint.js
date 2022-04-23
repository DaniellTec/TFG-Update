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
      <a href="testProduct"><button class="buttonImage"><img src={artIcon} width="220"></img></button></a>
      <h5>Titulo</h5>
      <div class="mt-3 info">
        <span class="text-1 d-block">Descripción</span>
        <span class="text-1 center">Text</span>
      </div>  
      <div class="cost mt-3 text-dark">
        <span class="color"><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/><FaRegStar/></span><br/>
        <span>$10.00</span>
        <div class="p-3 art text-center text-dark mt-3 cursor">
                <hr/>
          <button class="item-button btn btn-primary addToCart">Añadir al carrito</button>
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
        <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span>
        <br/>
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
      <span class="color"><FaStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>
        <br/>
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
                    <div class="col-12 col-md-6">
                        <div class="item shadow mb-4">
                            <h3 class="item-title">Pokemon Oro</h3>

                            <img class="item-image" img src={artIcon} alt=""  width="220"/>
                            <div class="item-details">
                                <h4 class="item-price">19.99€</h4>
                                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
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
      <span class="color"><FaStarHalfAlt/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/><FaRegStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStar/><FaRegStar/><FaRegStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/><FaRegStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/><FaRegStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaStar/></span>
        <br/>
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
      <span class="color"><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span>
        <br/>
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
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>

    <script src="./tienda.js"></script>
    </>
  );
};

export default Paint;