import "./Footer.scss";
import linkedin from "../../assets/icons/linkedin2.svg"
import github from "../../assets/icons/github.svg"


function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <a><li className="footer__list-item"><img src={linkedin} alt="linkenin" className="footer__icon" /></li></a>
                <a><li className="footer__list-item"><img src={github} alt="github" className="footer__icon" /></li></a>
            </ul>
            <ul className="footer__list-desktop">
                <a><li className="footer__list-item-desktop"><img src={linkedin} alt="linkenin" className="footer__icon" /></li></a>
                <a><li className="footer__list-item-desktop"><img src={github} alt="github" className="footer__icon" /></li></a>
            </ul>
            <a className="footer__text-link-desktop">yuvrajsirohi22@gmail.com</a>
            <p className="footer__description">Design heavily influenced by <a className="footer__description-link" href="https://github.com/bchiang7"> Brittany Chiang</a></p>
        </footer>
    )
}

export default Footer;