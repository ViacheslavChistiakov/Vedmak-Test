import React, { SetStateAction, useState } from 'react';
import rightArrow from '../Arrowright.png';
import leftArrow from '../Arrowleft.png';
import Slider from 'react-slick';
import MapComponent from './MapComponent'
import 'leaflet/dist/leaflet.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Container } from '@mui/material';
import Footer from './Footer';




const SliderEl: React.FC = () => {


    
const Arrow = (props: any) => {

    const { className, style, onClick, type, isActive } = props;
    const [active, setActive] = useState(false);
  
    const handleClick = (event: React.MouseEvent) => {
      setActive(!active);
      if (onClick) onClick(event);
    };
  
    const customStyle = {
      ...style,
      top: '-20%',
      zIndex: 1,
      marginRight: '480px',
      cursor: 'pointer',
    };
  
    const imgStyle = {
      width: '30px',
      height: '30px', 
      filter: active ? 'invert(50%) sepia(100%) saturate(500%) hue-rotate(180deg)' : 'none', 
    };
  
  
  
  
  
   
    return (
      <div className={className} style={customStyle} onClick={handleClick}>
        <img
          src={type === "next" ? rightArrow : leftArrow}
          alt={`${type} arrow`}
          className="custom-arrow"
          style={imgStyle}
        />
      </div>
    );
  }



    
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    beforeChange: (current: any, next: SetStateAction<number>) => setCurrentSlide(next),
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;




  return (
    <div className="section-actors">
    <div className="slider">
    <div className="progress-bar" style={{ width: `${progress}%`, height: '5px', background: 'red' }}></div>
    <Slider {...settings}>
      <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/Card1.png`}  alt="" className="" />
      </div>
      <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/Card2.png`}  alt="" className="" />
      </div>
      <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/Card3.png`}  alt="" className="" />
      </div>
      <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/Card4.png`}  alt="" className="" />
      </div>
      <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/Card5.png`}  alt="" className="" />
      </div>
      <div className="card">
          <img src={`${process.env.PUBLIC_URL}/images/Card6.png`} alt="" className="" />
      </div>
  </Slider>
  </div>
  <div className="photos">
           <h1 className="photos-title">Кадры со съемок</h1>
           <img src={`${process.env.PUBLIC_URL}/images/Photo1.png`} alt="" className="photos-first" /> 
           <div className="block-photos">
                <img src={`${process.env.PUBLIC_URL}/images/Photo2.png`} alt="" className="block-photos-wrap" />
                <img src={`${process.env.PUBLIC_URL}/images/Photo3.png`} alt="" className="block-photos-wrap" />
                <img src={`${process.env.PUBLIC_URL}/images/Photo4.png`} alt="" className="block-photos-wrap" />
                <img src={`${process.env.PUBLIC_URL}/images/Photo5.png`} alt="" className="block-photos-wrap" />
            </div> 
          <Button variant="contained" sx={{
          backgroundColor: "#EC3F3F26",
           position: "absolute", width:"1200px", height:"56px", top:"700px",
           xs: "100%", 
           sm: "50%",  
           md: "30%",  
           lg: "222px",  
              marginLeft: "auto",
              '&:hover': {
                backgroundColor: "#FF1E1E"
              }   
          }}>Показать еще</Button>       
    </div>
      <div className="maps">
                  <h1 className="maps-title">Магазины мерча ведьмака</h1>  
                    <div className="maps-wrap">
                      <MapComponent  />
                    </div>
          </div>
          <Footer />
  </div>
  )
};

export default SliderEl;