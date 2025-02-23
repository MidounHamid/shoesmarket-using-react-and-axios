import React from "react";
import "../Css/Home.css";

const Home = ({ shoes }) => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="description-section">
        <div className="description-text">
          <h1>The Best Shoes in Morocco</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae est vitae placeat veritatis! Ipsum,
            maiores est in veniam harum tenetur.
          </p>
        </div>
        <div className="description-image">
          <img src="./images/pexels-jddaniel-2385477.jpg" alt="shoes" />
        </div>
      </div>

      {/* Discounted Shoes Section */}
      <div className="discount-section">
        <h2>Discount:</h2>
        <div className="discount-content">
          {shoes
            .filter((shoe) => shoe.descount)
            .map((shoe) => (
              <div key={shoe.id} className="discount-card">
                <img src={`../images/shoes/${shoe.img}`} alt={shoe.name} />
                <p>{shoe.name}</p>
                <p>{shoe.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
