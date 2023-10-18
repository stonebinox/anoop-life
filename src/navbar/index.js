import React, { useState } from "react";

import Logo from "../assets/logo.png";
import {
  NavbarContainer,
  LogoHolder,
  LogoItem,
  NavLinksContainer,
  NavLink,
  NavbarWrapper,
} from "./index.styles";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("about");

  const linkClick = (id, event) => {
    event.preventDefault();
    const el = document.getElementById(id);

    if (!el) return;

    setActiveLink(id);
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LogoHolder>
          <LogoItem src={Logo} onClick={(e) => linkClick("about", e)} />
        </LogoHolder>
        <NavLinksContainer>
          <NavLink
            href="#about"
            className={activeLink === "about" && "active"}
            onClick={(e) => linkClick("about", e)}
          >
            about
          </NavLink>
          <NavLink
            href="#work"
            className={activeLink === "work" && "active"}
            onClick={(e) => linkClick("work", e)}
          >
            work
          </NavLink>
          <NavLink
            href="#media"
            className={activeLink === "media" && "active"}
            onClick={(e) => linkClick("media", e)}
          >
            media
          </NavLink>
          <NavLink
            href="#portfolio"
            className={activeLink === "portfolio" && "active"}
            onClick={(e) => linkClick("portfolio", e)}
          >
            portfolio
          </NavLink>
        </NavLinksContainer>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
