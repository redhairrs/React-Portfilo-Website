import './index.scss'

import LogoS from '../../assets/images/r-logo.png'
import codechefLogo from '../../assets/images/codechef.png'
import leetcodeLogo from '../../assets/images/leetcode.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import codeforcesLogo from '../../assets/images/code-forces.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    faHome,
    faUser,
    faEnvelope,
    faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'

import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="nav-bar">
                <Link className="logo" to="/">

                    <img src={LogoS} alt="Logo" />
                    <img className="sub-logo" src={LogoSubtitle} alt="Rishabh shamra" />

                </Link>
                <nav>

                    <NavLink exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                    </NavLink>

                    <NavLink activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="skills-link"
                        to="/skills"
                    >
                        <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="contact-link"
                        to="/contact"
                    >
                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                    </NavLink>

                </nav>

                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/rishabh-sharma-8b3a73205/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/redhairrs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.codechef.com/users/rishabh_rs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={codechefLogo} width="24" alt="Codechef" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://leetcode.com/redhair_rs/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={leetcodeLogo} width="24" alt="leetcode" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://codeforces.com/profile/r3hab.rs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={codeforcesLogo} width="24" alt="code-forces" />
                        </a>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Sidebar