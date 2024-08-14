import { useEffect, useRef } from "react";
import { NavbarLinks, NavbarAuth } from "./NavbarLinks";

export const Navbar = () => {
  const menu = useRef(null),
    body = document.querySelector("body"),
    btnOpen = useRef(null),
    btnClose = useRef(null);

  useEffect(() => {
    function openMenu() {
      btnClose.current.focus();
      body.classList.add("overlay");

      const visibility = menu.current.getAttribute("data-visible");

      if (visibility === "false") {
        menu.current.setAttribute("data-visible", true);
        btnOpen.current.setAttribute("aria-expanded", true);
      }
    }

    function closeMenu() {
      btnClose.current.focus();
      body.classList.remove("overlay");

      const visibility = menu.current.getAttribute("data-visible");

      if (visibility === "true") {
        menu.current.setAttribute("data-visible", false);
        btnOpen.current.setAttribute("aria-expanded", false);
      }

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
        data-visible="false"
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
