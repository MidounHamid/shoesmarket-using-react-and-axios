import React from "react";
import { FaStar } from "react-icons/fa";
import "../Css/Cart1.css";

export default function Cart1({ shoes }) {
  const { id, img, name, price, originalPrice, rating, detail } = shoes;

  return (
    <div className="cart-container">
      <div className="product" key={id}>
        <figure className="product-media">
          <a href="product.html">
            <img
              src={`../images/shoes/${img}`}
              alt={name}
              className="product-image"
              onError={(e) => console.error("Image not found:", e.target.src)}
            />
          </a>

          <div className="product-action-vertical">
            <button className="btn-product-icon btn-wishlist btn-expandable" aria-label="Add to wishlist">
              <span>❤️</span>
            </button>
            <button className="btn-product-icon btn-compare" aria-label="Compare">
              <span>🔁</span>
            </button>
            <button className="btn-product-icon btn-quickview" aria-label="Quick view" onClick={() => handleQuickView(id)}>
              <span>👁️</span>
            </button>
          </div>

          <div className="product-action">
            <button className="btn-product btn-cart" aria-label="Add to cart" onClick={() => handleAddToCart(id)}>
              <span>ADD TO CART</span>
            </button>
          </div>
        </figure>

        <div className="product-body">
          <div className="product-cat">
            <a href="#">Shoes</a>
          </div>
          <h3 className="product-title">
            <a href="product.html">{name}</a>
          </h3>
          <div className="product-price">
            ${price} <span className="product-original-price">Was ${originalPrice}</span>
          </div>

          <div className="ratings-container">
            <div className="ratings" style={{ display: "flex" }}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="star"
                  style={{
                    color: i < Math.floor(rating) ? "gold" : "lightgray",
                    fontSize: "18px",
                  }}
                />
              ))}
            </div>
            <p>{rating}</p>
          </div>

          <p className="product-detail">{detail.split(" ").slice(0, 4).join(" ")}...</p>
        </div>
      </div>
    </div>
  );
}

function handleQuickView(id) {
  console.log("Quick view for product:", id);
}

function handleAddToCart(id) {
  console.log("Add to cart product:", id);
}
