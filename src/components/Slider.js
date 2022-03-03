import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import image1 from '../images/carousel/image1.jpg';
import image2 from '../images/carousel/image2.jpg';
import image3 from '../images/carousel/image3.jpg';
import image5 from '../images/carousel/image5.jpg';
import image6 from '../images/carousel/image6.jpg';
import image7 from '../images/carousel/image7.jpg';
import image8 from '../images/carousel/image8.jpg';
import image9 from '../images/carousel/image9.jpg';
import image10 from '../images/carousel/image10.jpg';
import image11 from '../images/carousel/image11.jpg';
import image12 from '../images/carousel/image12.jpg';
import image13 from '../images/carousel/image13.jpg';

//import '../css/styles.css';

import "./Slider.css";

const Slide = () => {
    let data =[
        {
            id:1,
            imgSrc:image5
        },
        {
            id:2,
            imgSrc:image10
        },
        {
            id:3,
            imgSrc:image12
        },
        {
            id:4,
            imgSrc:image8
        },
        {
            id:5,
            imgSrc:image13
        },
        {
            id:6,
            imgSrc:image3
        },
        //remove?
        {
            id:8,
            imgSrc:image9
        },
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
            <img src={tempimgSrc}/>
            <CloseIcon onClick={()=>setModel(false)}/>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}> 
                        <img src={item.imgSrc} style={{width: '100%'}}/>
                    </div>
                )
            })}
        </div>
    </>
    )
};

export default Slide;
