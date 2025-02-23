import React from "react";
import "../Css/poste.css";

const Poste = ({ shoes }) => {
  return (
    <div className="poste-container container">
      {/* Shoe Image */}
      <img
        className="poste-image"
        // src={`/public/assets/images/shoes/${shoes.img}`}
        src={`../images/shoes/${shoes.img}`}
        
        alt={shoes.name}
      />


      {/* Shoe Name */}
      <h3 className="poste-name">{shoes.name}</h3>

      {/* Shoe Price */}
      <h4
        className="poste-price"
        style={{
          color: "#007BFF",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      >
        {shoes.price} DH
      </h4>

      {/* Shoe Details */}
      <p className="poste-detail"></p>

      {/* Optional Add to Cart Button */}
      <button
        className="poste-button"
        onClick={() => console.log(`Added ${shoes.name} to cart!`)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Poste;
