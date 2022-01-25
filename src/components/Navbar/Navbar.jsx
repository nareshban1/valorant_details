import React from "react";
import {
  Links,
  Logo,
  NavbarContainer,
  NavLinks,
  NavLinksContainer,
} from "./Navbar.css";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>vAlorant</Logo>
      <NavLinksContainer>
        <NavLinks>
          <Links>Agents</Links>
          <Links>Weapons</Links>
          <Links>Maps</Links>
        </NavLinks>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
