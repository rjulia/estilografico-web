import React from "react";
import Slider from "react-slick";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import './carousel.scss'

function CenterMode({images}) {
  console.log(images)
  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-dots-slider",
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    swipeToSlide: true,
    arrows: true
  };
  return (
    <div className="box-carousel">
      <Slider {...settings}>
        {
          images && images.map( (item) => (
            <div  key={item.url} >
              <div className="content-carousel" style={{backgroundColor: `${item.bgc}`}}>
                <div className="text-carousel">
                  <p className="text-carousel-first-text">Es más importante ser útil que intentar parecer importante.</p>
                  <p className="text-carousel-second-text">¿Porqué somos útiles?</p>
          
                  <div className="text-carousel-content">{documentToReactComponents(item.textoEs.json)}</div>
                </div>
                <div className="image-carousel">
                  <img src={item.imagen.url} alt={item.texto || ""}/>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
  
}

export default CenterMode
