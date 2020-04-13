import "./header.scss";
import React from "react";
import logo from "./../../resources/images/redbox_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="https://redbox.com/">
        <img src={logo} alt="Redbox logo" className="header__logo" />
      </a>
    </header>
  );
};

export default Header;
