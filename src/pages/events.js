import React from 'react'
import '../css/styles.css';

//import PlusIcon from '../images/artists/plus.svg';
import Legoshi from '../images/keychains/keychain1.jpg';
import Rouis from '../images/keychains/keychain2.jpg';
import Jack from '../images/keychains/keychain3.jpg';
import Gouhin from '../images/keychains/keychain4.jpg';
import PoseOne from '../images/keychains/keychain5.jpg';

import PlusIcon from '../images/artists/pluss.png';
import { BsPlusCircleFill } from "react-icons/bs";

const Keychains = () => {
    return (
      <> 
        <div>
            <br/><br/>
            <h1 className="center"> 
                Eventos<br/><br/>
            </h1>
        </div>    
        <table>
    <tr>
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} width="200" height="200" className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
    </tr>
    <tr>
        
    </tr>
</table>
<br/>
<table>
    <tr>
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} width="200" height="200" className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
    </tr>
    <tr>
        
    </tr>
</table>

<br/>
<table>
    <tr>
    <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} width="200" height="200" className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
    </tr>
    <tr>
    </tr>
</table>

      </>
    );
  };
  
  export default Keychains;