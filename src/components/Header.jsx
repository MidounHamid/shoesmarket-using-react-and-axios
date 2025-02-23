import React, { useState, useRef, useEffect } from "react";
import { CiHeart, CiLogout } from "react-icons/ci";
import { LuShoppingBasket } from "react-icons/lu";
import "../Css/Header.css";

export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header">
        <img src="logo.png" alt="Company Logo" className="logo" />
        <ul className="navList">
          <li className="navItem">
            <input
              type="text"
              placeholder="Search"
              className="searchInput"
              aria-label="Search"
            />
          </li>
          <li>
            <CiHeart size={24} />
          </li>
          <li>
            <LuShoppingBasket size={24} />
          </li>
          <li>
            <CiLogout size={24} />
          </li>

          {/* Menu Icon & Dropdown */}
          <li className="navItem" ref={dropdownRef}>
            <div
              className={`menu-icon ${isDropdownVisible ? "open" : ""}`}
              onClick={() => setDropdownVisible(!isDropdownVisible)}
            >
              <span className="nav-icon"></span>
              <span className="nav-icon"></span>
              <span className="nav-icon"></span>
            </div>

            <div
              className={`dropdown-content ${
                isDropdownVisible ? "dropdown-active" : ""
              }`}
            >
              <a href="#">Product</a>
              <a href="#">Contact</a>
              <a href="#">Signout</a>
            </div>
          </li>
        </ul>
      </header>
      <nav className="nav-container">
        <ul className="navL">
          <li className="navI">homme</li>
          <li className="navI">femme</li>
          <li className="navI">kids</li>
          <li className="navI">descount</li>
        </ul>
      </nav>
    </>
  );
}
