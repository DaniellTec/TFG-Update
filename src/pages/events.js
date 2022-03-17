import React from 'react'
import '../css/styles.css';

import eventIcon from '../images/icons/event.jpg';

import { BsPlusCircleFill } from "react-icons/bs";

import { FaEuroSign } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

import CarouselEvent from '../components/CarouselEvent';

const Event = () => {
  return (
    <> 

    <CarouselEvent />       

<table>
  <tr>
  <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
       &nbsp;  &nbsp; 
  </tr>
 <tr>
</tr>
</table>
<br/>

<table>
  <tr>
  <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
       &nbsp;  &nbsp; 
  </tr>
 <tr>
</tr>
</table>
<br/>

<table>
  <tr>
  <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
            <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
      <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
       <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart <br/> </td></center></button>*/}
      </div>
      </td>
      &nbsp;  &nbsp; 
      <td>
      <div class = "box">
      <button className="imageProductButton"><br/><img src={eventIcon} className="items"/></button> <br/><br/>
             <p align = "center">Description<b className="price"> <FaEuroSign/> 0,01</b></p>
      {/*<button class="btn btn-dark"><center><td className="tdt">Add To Cart</td></center></button>*/}
      </div>
      </td>
       &nbsp;  &nbsp; 
  </tr>
 <tr>
</tr>
</table>
    </>
  );
};

export default Event;