import { FaLinkedin, FaInstagram } from "react-icons/fa"
import "./footer.css"


const Footer = () => {

  return (

    <footer className="footer">

        <p className="footer-text">- {new Date().getFullYear()} Desarrollado por elias_codes -</p>

            <div className="footer-icons">

            <a
            href="https://www.linkedin.com/in/eliascodes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
            <FaLinkedin />
            </a>

            <a
            href="https://www.instagram.com/elias_codes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            >
            <FaInstagram />
            </a>

        </div>

    </footer>

  )
}

export default Footer
