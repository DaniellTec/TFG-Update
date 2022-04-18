import React from 'react'
import '../css/styles.css';


import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";





import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import CarouselPaint from '../components/CarouselArt';
import Footer from '../components/footer';
import blacksad from '../images/home/1.jpg';
const testProduct = () => {
  return (
    <>    
<br/>

<p><a href="/home">Home</a> / <a href="/testProduct">carrito</a></p><p/>


<section class="container content-section">
<h2 class="section-header">CART</h2>
<div class="cart-row">
    <span class="cart-item cart-header cart-column">ITEM</span>
    <span class="cart-price cart-header cart-column">PRICE</span>
    <span class="cart-quantity cart-header cart-column">QUANTITY</span>
</div>
<div class="cart-items">
</div>
<div class="cart-total">
    <strong class="cart-total-title">Total</strong>
    <span class="cart-total-price">$0</span>
</div>
<button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
</section>
<Footer/>
    </>
  );
};
export default testProduct;