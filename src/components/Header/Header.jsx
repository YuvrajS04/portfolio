import "./Header.scss";
import logo from "../../assets/logo/Yuvraj.png";
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import React from "react";
import { useState, useEffect } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const ToggleNav = () => {
    setNavOpen(!navOpen);
    setBodyScroll(navOpen);
  };
  const handleClickOutsideNav = (event) => {
    const headerNav = document.querySelector(".header__nav");
    const menu = document.querySelector(".menu");

    if (headerNav) {
      if (
        headerNav &&
        menu &&
        !headerNav.contains(event.target) &&
        !menu.contains(event.target)
      ) {
        setNavOpen(false);
        setBodyScroll(navOpen);
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNavOpen(false);
      setBodyScroll(true);
    }
  };
  useEffect(() => {
    document.body.style.overflow = bodyScroll ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [bodyScroll]);

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideNav);

    return () => {
      window.removeEventListener("click", handleClickOutsideNav);
    };
  }, [navOpen]);

  useEffect(() => {
      setIsVisible(true);
    }, []);
  useEffect(() => {
    const handlescroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setIsScrolled(false);
       } else {
        setTimeout(() => {
          setIsScrolled(true);
        }, 250);
       }
       setPrevScrollY(currentScrollY);
    }
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    }
  }, [prevScrollY]);
  return (
    <header
      className={`header ${isVisible ? "visible" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="header__logo delay1">
        <img className="logo" src={logo} />
      </div>
      <img
        className={` ${navOpen ? "menu" : "menu-alternative"}`}
        src={menu}
        onClick={ToggleNav}
      />
      <div className={` ${navOpen ? "blur" : "no-blur"}`}></div>

      <nav className={`header__nav ${navOpen ? "active" : ""}`}>
        <img
          className={` ${navOpen ? "close" : "close-alternative"}`}
          src={close}
          onClick={ToggleNav}
        />

        <ul className="nav">
          <li className="nav__list-item">
            <a className="nav__tag" onClick={() => scrollToSection("about")}>
              <span className="nav__tag-number">01.</span>
              <span className="nav__tag-text">about</span>
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__tag" onClick={() => scrollToSection("work")}>
              <span className="nav__tag-number">02.</span>
              <span className="nav__tag-text">work</span>
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__tag" onClick={() => scrollToSection("contact")}>
              <span className="nav__tag-number">03.</span>
              <span className="nav__tag-text">contact</span>
            </a>
          </li>
          <li className="buttons">
            <a className="nav__tag-button raise">Resume</a>
          </li>
        </ul>
      </nav>
      <nav className="header__nav-desktop" >
        <ul className="nav__list-desktop">
          <li className="nav-list__item-desktop">
            <a
              className="nav__tag-desktop"
              onClick={() => scrollToSection("about")}
            >
              <span className="nav__tag-number-desktop">01.</span>
              about
            </a>
          </li>
          <li className="nav-list__item-desktop">
            <a
              className="nav__tag-desktop"
              onClick={() => scrollToSection("work")}
            >
              <span className="nav__tag-number-desktop">02.</span>
              work
            </a>
          </li>
          <li className="nav-list__item-desktop">
            <a
              className="nav__tag-desktop"
              onClick={() => scrollToSection("contact")}
            >
              <span className="nav__tag-number-desktop">03.</span>
              contact
            </a>
          </li>
          <li className="buttons">
            <a className="raise">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
