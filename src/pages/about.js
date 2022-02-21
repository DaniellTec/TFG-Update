import React from 'react'
import '../css/styles.css';

import Lamb from '../images/artists/Lamb.jpg';
import Shado from '../images/artists/Shado.jpg';
import Dray from '../images/artists/Dray.jpg';
import Sayael from '../images/artists/Sayael.jpg';
import Jennel from '../images/artists/Jennel.jpg';
import Glenda from '../images/artists/Glenda.jpg';
import DaikiCat from '../images/artists/DaikiCat.jpg';

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
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={Lamb} className="items"/>
            </a>
            <center><td className="tdt">Lamb</td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/Snowfalls_art_channel" target="_blank">
        <img src={Shado} width="200" height="200" className="items"/>
            </a>
            <center><td className="tdt">Shado</td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/drayscorner" target="_blank">
        <img src={Dray} className="items"/>
            </a>
            <center><td className="tdt">Dray</td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/Idiot" target="_blank">
        <img src={Sayael} className="items"/>
            </a>
            <center><td className="tdt">Sayael</td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/JennelArte" target="_blank">
        <img src={Jennel} className="items"/>
            </a>
            <center><td className="tdt">Jennel</td></center> 
        </td>
    </tr>
    <tr>
    </tr>
</table>
<br/>
<table>
    <tr>
        <td>
        <a href="https://t.me/Illustrations_by_Glenda" target="_blank">
        <img src={Glenda} className="items"/>
            </a>
            <center><td className="tdt">Glenda</td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/daikithecat" target="_blank">
        <img src={DaikiCat} width="200" height="200" className="items"/>
            </a>
            <center><td className="tdt">Daiki.Cat</td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={Add} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={Add} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp;
        <td>
        <a href="https://t.me/IdiotArt" target="_blank">
        <img src={Add} className="items"/>
            </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
    </tr>
    <tr>
        
    </tr>
</table>
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