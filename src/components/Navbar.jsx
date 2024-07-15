import { useEffect } from "react";
import { useRef } from "react";

export const Navbar = () => {
  const btnOpen = useRef(null);
  const btnClose = useRef(null);

  useEffect(() => {
    function openMenu() {
      btnOpen.current.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
      btnOpen.current.setAttribute("aria-expanded", "false");
    }

    btnOpen.current.addEventListener("click", openMenu);
    
    btnClose.current.addEventListener("click", closeMenu);
  });

  return (
    <header>
      <nav className="navbar" id="navbar">
        <div className="navbar__brand-title">snap</div>

        <span id="nav-label" hidden>
          Navigation
        </span>
        <button
          ref={btnOpen}
          className="navbar__open"
          aria-expanded="false"
          aria-labelledby="nav-label"
        >
          <img src="/images/icon-menu.svg" alt="" width={"40"} height={"24"} />
        </button>

        <div className="navbar__menu" role="dialog" aria-labelledby="nav-label">
          <button className="navbar__close" ref={btnClose} aria-label="close">
            <img src="/images/icon-close-menu.svg" alt="" />
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
            <a href="">
              <button className="login">Login</button>
            </a>
            <a href="">
              <button className="register">Register</button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
