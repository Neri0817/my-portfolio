export const Header = () => {
  return (
    <header>
      <div className="header-logo-container"></div>
      <div className="header-container">
        <nav>
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/skills">skills</a>
            </li>
            <li>
              <a href="/projects">projects</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
