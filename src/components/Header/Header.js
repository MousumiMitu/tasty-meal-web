import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="main-container">
        <div className="logo-img d-flex">
          <h4 style={{ margin: "auto 0" }}>TastyMeal</h4>
          <img src={logo} />
        </div>
        <div className="nav-bar">
          <FontAwesomeIcon
            className="me-4"
            icon={faShoppingCart}
            style={{ color: "rgb(241, 5, 5)" }}
          />
          <button className="primary-btn me-4">Login</button>
          <button className="secondary-btn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
