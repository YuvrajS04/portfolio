import "./Header.scss";
import logo from "../../assets/logo/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="logo" src={logo} />
      </div>
      <nav className="nav__mobile"></nav>
      <nav className="header__nav">
        <ul className="nav">
          <li className="nav__list-item">
            <a className="nav__tag" id="about">
              <span className="nav__tag-number">01.</span>
              <span className="nav__tag-text">about</span>
            </a>
          </li>
          <li>
            <a className="nav__tag" id="work">
              <span className="nav__tag-number">02.</span>
              <span className="nav__tag-text">work</span>
            </a>
          </li>
          <li>
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
