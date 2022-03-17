import React from 'react'
import '../css/styles.css';

import userIcon from '../images/icons/userIcon.png';

import Add from '../images/icons/add.JPG';

import { BsPlusCircleFill } from "react-icons/bs";

const About = () => {
    return (
      <> 
        <div>
            <br/>
            <h1 className="center"> 
                Sobre Nosotros
            </h1>
        </div>    
        <br/>
        <table>
    <tr>
        <td>
        <img src={userIcon} className="items"/>
            <center><td className="tdt">Carlos Daniell</td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={userIcon} width="200" height="200" className="items"/>
            <center><td className="tdt">Álvaro Mollá</td></center> 
        </td>
    </tr>
    <tr>
    </tr>
</table>
<br/>

{/*
        <div>    
        <center>
        <a href="https://t.me/IdiotArt" target="_blank">
            <img src={Lamb} width="200" height="200" className="round items"/>
        </a>      
        &nbsp;  &nbsp;  &nbsp;
        <a href="https://t.me/Snowfalls_art_channel" target="_blank">
            <img src={Shado} width="200" height="200" className="round items"/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <a href="https://t.me/drayscorner" target="_blank">
            <img src={Dray} width="200" height="200" className="round items"/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <a href="/products/veibae-portrait-pin-glows-in-the-dark-limited-stock" target="_blank">
            <img src={Sayael} width="200" height="200" className="round items"/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <a href="https://t.me/JennelArte" target="_blank">
            <img src={Jennel} width="200" height="200" className="round items "/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <br/> <br/>
        <a href="https://t.me/Illustrations_by_Glenda" target="_blank">
            <img src={Glenda} width="200" height="200" className="round items"/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <a href="/products/veibae-portrait-pin-glows-in-the-dark-limited-stock" >
            <img src={PlusIcon} width="200" height="200" className="round items"/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <a href="/products/veibae-portrait-pin-glows-in-the-dark-limited-stock">
            <img src={PlusIcon} width="200" height="200" className="round items"/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <a href="/products/veibae-portrait-pin-glows-in-the-dark-limited-stock">
            <img src={PlusIcon} width="200" height="200" className="round items"/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <a href="/products/veibae-portrait-pin-glows-in-the-dark-limited-stock">
            <img src={PlusIcon} width="200" height="200" className="round items"/>
        </a>
        &nbsp;  &nbsp;  &nbsp;
        <br/><br/><br/><br/><br/> 
       </center> 
       </div>
*/}
      </>
    );
  };
  
  export default About;