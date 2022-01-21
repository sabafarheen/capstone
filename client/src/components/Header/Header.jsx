import React from "react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} className="header__logo" alt="G4Kids logo" />
    </header>
  );
};

export default Header;
