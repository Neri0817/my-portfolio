import { Link } from "react-router-dom";
import logo from "../../images/neri-logo.png";

export const Header = () => {
  return (
    <header>
      <div className="header-logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header-container">
        <nav className="header-container-nav">
          <ul className="header-container-nav-list">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/skills">skills</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-download-container">
        <a href="/neri-cv.pdf" download>
          <i className="fa-regular fa-circle-down fa-beat-fade"></i>
          Download CV
        </a>
      </div>
    </header>
  );
};
