import React from "react";
import { Link } from "react-router-dom";
import "../../sass/__header.scss";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="container">
        <div className="header__section">
          <div className="header__logo">
            <h1>LOGO</h1>
          </div>
          <div className="header__links">
            <Link to={"/"}>Home</Link>
            <Link to={"/user"}>User</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
