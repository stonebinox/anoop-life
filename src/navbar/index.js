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

  const linkClick = (id) => {
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });

    setActiveLink(id);
  };

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LogoHolder>
          <LogoItem src={Logo} />
        </LogoHolder>
        <NavLinksContainer>
          <NavLink
            href="#"
            className={activeLink === "about" && "active"}
            onClick={() => linkClick("about")}
          >
            about
          </NavLink>
          <NavLink
            href="#"
            className={activeLink === "work" && "active"}
            onClick={() => linkClick("work")}
          >
            work
          </NavLink>
          <NavLink
            href="#"
            className={activeLink === "media" && "active"}
            onClick={() => linkClick("media")}
          >
            media
          </NavLink>
          <NavLink
            href="#"
            className={activeLink === "portfolio" && "active"}
            onClick={() => linkClick("portfolio")}
          >
            portfolio
          </NavLink>
        </NavLinksContainer>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
