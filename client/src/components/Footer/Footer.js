import "./Footer.scss";
import React from "react";
import Facebook from "../../assets/images/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={Facebook} alt="Facebook" />
      </div>
      <p className="footer__text">
        Copyright © G4Kids Inc. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
