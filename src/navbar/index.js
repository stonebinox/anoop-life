import React from "react";

import Logo from "../assets/logo.png";
import {
  NavbarContainer,
  LogoHolder,
  LogoItem,
  NavLinksContainer,
  NavLink,
} from "./index.styles";

export const Navbar = () => (
  <NavbarContainer>
    <LogoHolder>
      <LogoItem src={Logo} />
    </LogoHolder>
    <NavLinksContainer>
      <NavLink href="#" className="active">
        about
      </NavLink>
      <NavLink href="#">work</NavLink>
      <NavLink href="#">portfolio</NavLink>
      <NavLink href="#">media</NavLink>
      <NavLink href="#">contact</NavLink>
    </NavLinksContainer>
  </NavbarContainer>
);
