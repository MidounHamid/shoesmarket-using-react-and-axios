import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Poste from "./Poste";
// import Cart from "./Cart";
import Cart1 from "./Cart1";


// Custom Arrow Components
// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "#007BFF",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     />
//   );
// };

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "#007BFF",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     />
//   );
// };

const Carousel = ({ shoesList = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "0", // No extra padding for the center slide
    focusOnSelect: true, // Focus on the center slide when clicked
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    // nextArrow: <NextArrow />, // Custom next arrow
    // prevArrow: <PrevArrow />, // Custom previous arrow
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
    <div
      style={{ margin: "20px", padding: "20px", width: "60%", height: "50vw" }}
    >
      <Slider {...settings}>
        {shoesList.map((shoes, index) => (
          <div key={index} style={{ padding: "10px" }}>
            {/* <Poste shoes={shoes} /> */}
            {/* <Cart shoes={shoes} /> */}
            <Cart1 shoes={shoes} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
