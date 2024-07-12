export const Navbar = () => {
  return (
    <header>
      <nav className="navbar" id="navbar">
        <div className="navbar__brand-title">snap</div>

        {/* <button className="navbar__open">
          <img src="/images/icon-menu.svg" alt="" width={"40"} height={"24"} />
        </button> */}

        <div className="navbar__menu">
          {/* <button className="navbar__close">
            <img
              src="/images/icon-close-menu.svg"
              alt=""
              width={"28"}
              height={"27"}
            />
          </button> */}

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

            <li className="navbar__item">
              <a href="">
                <button className="login">Login</button>
              </a>
            </li>
            <li className="navbar__item">
              <a href="">
                <button className="register">Register</button>
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__auth"></div>
      </nav>
    </header>
  );
};
