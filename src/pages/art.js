import React from 'react'
import '../css/styles.css';

import PlusIcon from '../images/artists/pluss.png';

import { BsPlusCircleFill } from "react-icons/bs";

const Art = () => {
  return (
    <> 
      <div>
        <br/><br/>
          <h1 className="center"> 
              Arte<br/><br/>
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

export default Art;