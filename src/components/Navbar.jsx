import { useEffect, useRef } from "react";
import { NavbarLinks, NavbarAuth } from "./NavbarLinks";

export const Navbar = () => {
  const menu = useRef(null),
    body = document.querySelector("body"),
    btnOpen = useRef(null);

  useEffect(() => {
    function openMenu() {
      const visibility = menu.current.getAttribute("data-visible");

      if (visibility === "false") {
        menu.current.setAttribute("data-visible", true);
        btnOpen.current.setAttribute("aria-expanded", true);
        body.classList.add("overlay");
      }

      if (visibility === "true") {
        menu.current.setAttribute("data-visible", false);
        btnOpen.current.setAttribute("aria-expanded", false);
        body.classList.remove("overlay");
      }
    }

    btnOpen.current.addEventListener("click", openMenu);
  });

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar__brand-title">snap</div>

      <button
        type="button"
        ref={btnOpen}
        className="navbar__open"
        aria-expanded="false"
      >
        <span className="sr-only">Menu</span>
      </button>

      <div
        className="navbar__menu"
        role="dialog"
        data-visible="false"
        ref={menu}
      >
        <NavbarLinks />

        <NavbarAuth />
      </div>
    </nav>
  );
};
