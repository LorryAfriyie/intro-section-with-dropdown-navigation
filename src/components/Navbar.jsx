export const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__item-container">
        <div className="navbar__brand-title">snap</div>

        <ul className="navbar__links">
          <li className="navbar__item">
            <a href="" className="navbar__link">
              Features
            </a>
          </li>

          <li className="navbar__item">
            <a href="" className="navbar__link">
              Companies
            </a>
          </li>

          <li className="navbar__item">
            <a href="" className="navbar__link">
              Careers
            </a>
          </li>

          <li className="navbar__item">
            <a href="" className="navbar__link">
              About
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar__auth">
        <a href="" className="login">Login</a>

        <a href="" className="register">Register</a>
      </div>
    </nav>
  );
};
