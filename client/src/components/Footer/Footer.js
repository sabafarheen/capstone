import "./Footer.scss";
import React from "react";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__logo-fb" src={Facebook} alt="Facebook" />
        <img className="footer__logo-normal" src={Instagram} alt="Instagram" />
        <img className="footer__logo-normal" src={Twitter} alt="Twitter" />
      </div>
      <div className="footer__text">
        Copyright © G4Kids Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
