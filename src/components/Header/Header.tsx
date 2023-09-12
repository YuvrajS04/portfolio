import "./Header.scss";
import logo from "../../assets/logo/Yuvraj.png";
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import { useState, useEffect, useCallback } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false); // For controlling the navigation menu
  const [bodyScroll, setBodyScroll] = useState(true); // To control body scrolling
  const [isVisible, setIsVisible] = useState(false); // To track header visibility
  const [isScrolled, setIsScrolled] = useState(true); // To track header scroll state
  const [prevScrollY, setPrevScrollY] = useState(0); // To track previous scroll position

  // Function to toggle the navigation menu
  const ToggleNav = () => {
    setNavOpen(!navOpen);
    setBodyScroll(navOpen);
  };

  // Callback function to handle clicks outside of the navigation menu
  const handleClickOutsideNav = useCallback(
    (event : MouseEvent) => {
      const headerNav = document.querySelector(".header__nav");
      const menu = document.querySelector(".menu");

      if (headerNav) {
        if (
          headerNav instanceof Node &&
          menu instanceof Node &&
          !headerNav.contains(event.target as Node) &&
          !menu.contains(event.target as Node)
        ) {
          setNavOpen(false);
          setBodyScroll(navOpen);
        }
      }
    },
    [navOpen]
  );

  // Function to scroll to a section when a navigation item is clicked
  const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNavOpen(false);
      setBodyScroll(true);
    }
  };

  // Effect to control body scrolling
  useEffect(() => {
    document.body.style.overflow = bodyScroll ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [bodyScroll]);

  // Effect to handle clicks outside the navigation menu
  useEffect(() => {
    window.addEventListener("click", handleClickOutsideNav);

    return () => {
      window.removeEventListener("click", handleClickOutsideNav);
    };
  }, [navOpen, handleClickOutsideNav]);

  // Effect to set header visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Effect to handle header scrolling behavior
  useEffect(() => {
    const handlescroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setIsScrolled(false);
      } else {
          setIsScrolled(true);
      }
      setPrevScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={`header ${isVisible ? "visible" : ""} ${
        isScrolled ? "scrolled" : "noscroll"
      }`}
    >
      <div className="header__logo">
        <img className="logo" src={logo} alt="website logo" />
      </div>
      <img
        className={` ${navOpen ? "menu" : "menu-alternative"}`}
        src={menu}
        onClick={ToggleNav}
        alt="hamburger menu icon"
      />
      <div className={` ${navOpen ? "blur" : "no-blur"}`}></div>

      <nav className={`header__nav ${navOpen ? "active" : ""}`}>
        <img
          className={` ${navOpen ? "close" : "close-alternative"}`}
          src={close}
          onClick={ToggleNav}
          alt="close icon"
        />

        <ul className="nav">
          <li className="nav__list-item">
            <button
              className="nav__tag"
              onClick={() => scrollToSection("about")}
            >
              <span className="nav__tag-number">01.</span>
              <span className="nav__tag-text">about</span>
            </button>
          </li>
          <li className="nav__list-item">
            <button
              className="nav__tag"
              onClick={() => scrollToSection("work")}
            >
              <span className="nav__tag-number">02.</span>
              <span className="nav__tag-text">work</span>
            </button>
          </li>
          <li className="nav__list-item">
            <button
              className="nav__tag"
              onClick={() => scrollToSection("contact")}
            >
              <span className="nav__tag-number">03.</span>
              <span className="nav__tag-text">contact</span>
            </button>
          </li>
          <li className="buttons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1UIDLtJVdFIKgRs8CF970igV61tNwi4gv/view?usp=sharing"
              className="nav__tag-button raise"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <nav className="header__nav-desktop">
        <ul className="nav__list-desktop">
          <li className="nav-list__item-desktop">
            <button
              className="nav__tag-desktop"
              onClick={() => scrollToSection("about")}
            >
              <span className="nav__tag-number-desktop">01.</span>
              about
            </button>
          </li>
          <li className="nav-list__item-desktop">
            <button
              className="nav__tag-desktop"
              onClick={() => scrollToSection("work")}
            >
              <span className="nav__tag-number-desktop">02.</span>
              work
            </button>
          </li>
          <li className="nav-list__item-desktop">
            <button
              className="nav__tag-desktop"
              onClick={() => scrollToSection("contact")}
            >
              <span className="nav__tag-number-desktop">03.</span>
              contact
            </button>
          </li>
          <li className="buttons">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1UIDLtJVdFIKgRs8CF970igV61tNwi4gv/view?usp=sharing"
              className="raise"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
