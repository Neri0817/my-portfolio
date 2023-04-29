import { Link } from "react-router-dom";
import logo from "../../images/primerno-logo.jpg";

export const Header = () => {
  return (
    <header>
      <div className="header-logo-container">
        <img src={logo} alt="Logo" />
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
    </header>
  );
};
