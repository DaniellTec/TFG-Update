import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import image1 from '../images/carousel/image1.jpg';
import image2 from '../images/carousel/image2.jpg';
import image3 from '../images/carousel/imagetest.jpg';
import image5 from '../images/carousel/image5.jpg';
import image6 from '../images/carousel/image6.jpg';
import image7 from '../images/carousel/image7.jpg'; 
import image8 from '../images/carousel/image8.jpg';
import image9 from '../images/carousel/image9.jpg';
import image10 from '../images/carousel/image10.jpg';
import image11 from '../images/carousel/image11.jpg';
import image12 from '../images/carousel/image12.jpg';
import image13 from '../images/carousel/image13.jpg';
import image14 from '../images/carousel/image1444.jpg';
import image15 from '../images/carousel/image15.jpg';
import image16 from '../images/carousel/image16.jpg';
import image17 from '../images/carousel/imagetest2.jpg';

import blacksad from '../images/home/1.jpg';

//import '../css/styles.css';

import "../components/gallery.css";

const Slide = () => {
    let data =[
        {
            id:1,
            imgSrc:blacksad
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
        
    }
    
    return(
    <>
        <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} ondblclick="Photo()"/>
            <CloseIcon onClick={()=>setModel(false)}/> <br/>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}> 
                        <img src={item.imgSrc} style={{width: '100%'}} class="rounded border border-dark"/>
                    </div>
                )
            })}
        </div>
    </>
    )
};

export default Slide;
