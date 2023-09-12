import "./Footer.scss";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/yuvraj-sirohi/"
        >
          <li className="footer__list-item">
            <Icon className="footer__icon" icon="line-md:linkedin" />
          </li>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/YuvrajS04">
          <li className="footer__list-item">
            <Icon className="footer__icon" icon="line-md:github-loop" />
          </li>
        </a>
      </ul>
      <ul className="footer__list-desktop">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/yuvraj-sirohi/"
        >
          <li className="footer__list-item-desktop">
            <Icon className="footer__icon" icon="line-md:linkedin" />
          </li>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/YuvrajS04">
          <li className="footer__list-item-desktop">
            <Icon className="footer__icon" icon="line-md:github-loop" />
          </li>
        </a>
      </ul>
      <a
        href="mailto:yuvrajsirohi22@gmail.com"
        className="footer__text-link-desktop"
        target="_blank"
        rel="noreferrer"
      >
        yuvrajsirohi22@gmail.com
      </a>
      <p className="footer__description">
        Design influenced by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="footer__description-link"
          href="https://github.com/bchiang7"
        >
          {" "}
          Brittany Chiang
        </a>
      </p>
    </footer>
  );
}

export default Footer;
