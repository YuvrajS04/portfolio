import "./Header.scss";
import logo from "../../assets/logo/logo.svg";
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg"
import React from "react";
import { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const ToggleNav = () => {
    setNavOpen(!navOpen)
  };
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo" src={logo} />
      </div>
      <img className={` ${navOpen ? "menu" : "menu-alternative"}`} src={menu} onClick={ToggleNav} />
      <div className={` ${navOpen ? "blur" : 'no-blur'}`}  ></div>

      <nav className={`header__nav ${navOpen ? 'active' : ''}`} >
        <img className={` ${navOpen ? "close" : "close-alternative"}`} src={close} onClick={ToggleNav} />

        <ul className="nav">
          <li className="nav__list-item">
            <a className="nav__tag" id="about">
              <span className="nav__tag-number">01.</span>
              <span className="nav__tag-text">about</span>
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__tag" id="work">
              <span className="nav__tag-number">02.</span>
              <span className="nav__tag-text">work</span>
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__tag" id="contact">
              <span className="nav__tag-number">03.</span>
              <span className="nav__tag-text">contact</span>
            </a>
          </li>
          <li>
            <a className="nav__tag-button">Resume</a>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
