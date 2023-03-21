import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";


const styles = {
    logo: {
        margin: '0.9rem',
    }
}

const Footer = () => {
    return (
        <>
            <footer className="container-footer mx-auto">
                {/* github logo */}
                <a
                    href="https://github.com/erickjavalos"
                    style= {styles.logo}
                    className='link'
                >
                    <FontAwesomeIcon icon={faGithub} style={{fontSize:'2rem', color: 'white'}} />
                </a>
                {/* linked in logo */}
                <a
                    href="https://www.linkedin.com/in/erick-avalos-13014012a"
                    style= {styles.logo}
                    className='link'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} style={{fontSize:'2rem', color: 'white'}} />
                </a>
            </footer>
        </>
    );
};

export default Footer;