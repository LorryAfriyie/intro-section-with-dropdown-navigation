export const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__brand-title">snap</div>

      <button className="navbar__open">
        <img src="/images/icon-menu.svg" alt="" width={"40"} height={"24"} />
      </button>

      <div className="navbar__menu">
        <button className="navbar__close">
          <img
            src="/images/icon-close-menu.svg"
            alt=""
            width={"28"}
            height={"27"}
          />
        </button>

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

        <div className="navbar__auth">
            <a href="" className="login">
              Login
            </a>

            <a href="" className="register">
              Register
            </a>
          </div>
      </div>
    </nav>
  );
};
