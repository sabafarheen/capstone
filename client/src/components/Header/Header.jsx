import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ isLogin, getIsLogin }) => {
  const history = useHistory();

  const logOutHandler = () => {
    localStorage.clear();
    history.push("/login");
    getIsLogin(false);
  };

  const loginHandler = () => {
    history.push("login");
  };
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Gi4Kids logo" />
      <ul className="header__nav">
        <Link to="/">
          <li className="header__nav-link">Home</li>
        </Link>
        <Link to="/grade">
          <li className="header__nav-link">Resource</li>
        </Link>
        {isLogin ? (
          <li className="header__nav-link-color" onClick={logOutHandler}>
            Logout
          </li>
        ) : (
          <li className="header__nav-link-color" onClick={loginHandler}>
            Login
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
