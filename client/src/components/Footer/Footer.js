import "./Footer.scss";
import React from "react";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Twitter from "../../assets/images/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img className="footer__logo-icon" src={Facebook} alt="Facebook" />
        <img className="footer__logo-icon" src={Instagram} alt="Instagram" />
        <img className="footer__logo-icon" src={Twitter} alt="Twitter" />
      </div>
      <div className="footer__text">
        Copyright © Gi4Kids Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
