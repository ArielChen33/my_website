import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import LogoA from "../../assets/images/logo-a.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoA} alt="logo" />
            {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                {/* <FontAwesomeIcon icon={faHome} color="#4d4d4e"/> */}
                <FontAwesomeIcon icon={faHome} color="#607D8B"/>
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#607D8B"/>
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#607D8B"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/w-q-chen-178147227/">
                    <FontAwesomeIcon icon={faLinkedin} color="#607D8B" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/ArielChen33">
                    <FontAwesomeIcon icon={faGithub} color="#607D8B" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar