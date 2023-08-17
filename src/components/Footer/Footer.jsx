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
            <p className="footer__description">Design heavily influenced by <a className="footer__description-link" href="https://github.com/bchiang7"> Brittany Chiang</a></p>
        </footer>
    )
}

export default Footer;