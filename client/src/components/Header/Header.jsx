import React from "react";
import Logo from "../../assets/images/logo2.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="G4Kids logo" />
      <ul className="header__nav">
        <li className="header__nav-link">HOME</li>
        <li className="header__nav-link">ABOUT</li>
        <li className="header__nav-link">CONTACT US</li>
      </ul>
    </header>
  );
};

export default Header;
