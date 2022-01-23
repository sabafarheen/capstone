import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo2.png";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const [token, setToken] = useState(null);
  console.log(token);
  useEffect(() => {
    const login_token = localStorage.getItem("token") || null;
    setToken(login_token);
  }, [token]);
  const logOutHandler = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="G4Kids logo" />
      <ul className="header__nav">
        <li className="header__nav-link">HOME</li>
        <li className="header__nav-link">ABOUT</li>
        <li className="header__nav-link">CONTACT US</li>
        {token && (
          <li className="header__nav-link" onClick={logOutHandler}>
            LOGOUT
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
