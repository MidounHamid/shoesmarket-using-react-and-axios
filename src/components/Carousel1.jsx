import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart1 from "./Cart1";
import "../Css/Carousel1.css";

const Carousel1 = ({ shoesList = [] }) => {
  const categories = [...new Set(shoesList.map((shoes) => shoes.category))];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="carouselsContainer" >
      
      <div className="carousels">
      {categories.map((category) => {
        const filteredShoes = shoesList.filter((shoes) => shoes.category === category);
        return (
          <div  className="cartSlider" key={category}>
            <h2>{category}</h2>
            <Slider {...settings}>
              {filteredShoes.map((shoes) => (
                <div key={shoes.id}>
                  <Cart1 shoes={shoes} />
                </div>
              ))}
            </Slider>
            
          </div>
        );
      })}
      </div>
      
    </div>
  );
};

export default Carousel1;
