import React from 'react'
// import "./Css/Fouter.css";
import "../Css/Fouter.css";

export default function Footer() {
    return (
      <>
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="footer-links">
                <h4 className="h4">Quick Shop</h4>
                <ul>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Kids</a></li>
                  <li><a href="#">Sportswear</a></li>
                  <li><a href="#">Sale</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4 className="h4">Informations</h4>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Privacy policy</a></li>
                  <li><a href="#">Terms &amp; condition</a></li>
                  <li><a href="#">My Account</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4 className="h4">Customer Services</h4>
                <ul>
                  <li><a href="#">Request Personal Data</a></li>
                  <li><a href="#">FAQ's</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Orders and Returns</a></li>
                  <li><a href="#">Support Center</a></li>
                </ul>
              </div>
              <div className="contact-box">
                <h4 className="h4">Contact Us</h4>
                <ul className="addressFooter">
                  <li><i className="icon anm anm-map-marker-al"></i><p>55 Gallaxy Enque,<br />2568 steet, 23568 NY</p></li>
                  <li className="phone"><i className="icon anm anm-phone-s"></i><p>(440) 000 000 0000</p></li>
                  <li className="email"><i className="icon anm anm-envelope-l"></i><p>sales@yousite.com</p></li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <div className="row">
              <div className="copyright">
                <span>© 2021 <a href="#">MShoes</a>. All Rights Reserved.</span> 
              </div>
              <div className="payment-icons">
                <ul className="list--inline">
                  <li><i className="icon fa fa-cc-visa" aria-hidden="true"></i></li>
                  <li><i className="icon fa fa-cc-mastercard" aria-hidden="true"></i></li>
                  <li><i className="icon fa fa-cc-discover" aria-hidden="true"></i></li>
                  <li><i className="icon fa fa-cc-paypal" aria-hidden="true"></i></li>
                  <li><i className="icon fa fa-cc-amex" aria-hidden="true"></i></li>
                  <li><i className="icon fa fa-credit-card" aria-hidden="true"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }