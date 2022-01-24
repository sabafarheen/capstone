import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const [token, setToken] = useState(null);
  console.log(token);
  useEffect(() => {
    const login_token = localStorage.getItem("token") || null;

    console.log("Login Token", login_token);
    setToken(login_token);
  }, [token]);
  const logOutHandler = () => {
    setToken(null);
    localStorage.clear();
    history.push("/login");
  };
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Gi4Kids logo" />
      <ul className="header__nav">
        <li className="header__nav-link">Home</li>
        <li className="header__nav-link">Resource</li>

        {/* {token && ( */}
        <li className="header__nav-link-color" onClick={logOutHandler}>
          Logout
        </li>
        {/* )} */}
      </ul>
    </header>
  );
};

export default Header;
