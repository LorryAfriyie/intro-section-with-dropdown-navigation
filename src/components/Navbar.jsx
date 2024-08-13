import { useEffect, useRef } from "react";
import { NavbarLinks, NavbarAuth } from "./NavbarLinks";

export const Navbar = () => {
  const menu = useRef(null),
    body = document.querySelector("body"),
    btnOpen = useRef(null),
    btnClose = useRef(null);

  useEffect(() => {
    function openMenu() {
      btnOpen.current.setAttribute("aria-expanded", "true");
      menu.current.removeAttribute("inert");
      menu.current.removeAttribute("style");
      btnClose.current.focus();
      body.classList.add("overlay");
    }

    function closeMenu() {
      btnOpen.current.setAttribute("aria-expanded", "false");
      menu.current.setAttribute("inert", "");
      btnClose.current.focus();
      body.classList.remove("overlay");

      setTimeout(() => {
        menu.current.style.transition = "none";
      }, 500);
    }

    btnOpen.current.addEventListener("click", openMenu);

    btnClose.current.addEventListener("click", closeMenu);
  });

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__brand-title">snap</div>

      <span id="nav-label" hidden>
        Navigation
      </span>
      
      <button
        type="button"
        ref={btnOpen}
        className="navbar__open"
        aria-expanded="false"
        aria-labelledby="nav-label"
      >
        <img
          src="/images/icon-menu.svg"
          alt="open-button"
          width={"40"}
          height={"24"}
        />
      </button>

      <div
        className="navbar__menu"
        role="dialog"
        aria-labelledby="nav-label"
        ref={menu}
      >
        <button
          type="button"
          className="navbar__close"
          ref={btnClose}
          aria-label="close"
        >
          <img src="/images/icon-close-menu.svg" alt="close-button" />
        </button>

        <NavbarLinks />

        <NavbarAuth />
      </div>
    </nav>
  );
};
