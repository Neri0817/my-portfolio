import { Link } from "react-router-dom";
import logo from "../../images/neri-logo.png";
export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-container-social">
          <ul className="footer-container-social-list">
            <li>
              <a href="https://www.instagram.com/neri0817/">
                <i className="fa-brands fa-instagram instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Neri0817">
                <i className="fa-brands fa-github github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/neri0817">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/neri0817/">
                <i className="fa-brands fa-linkedin linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="footer-info-container">
        <p>All rights reserved. &#174;</p>
        <p>&#169; 2023 Designed and built by Neri Mehmedova</p>
      </div>
    </footer>
  );
};
