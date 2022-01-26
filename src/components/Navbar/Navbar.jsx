import React from "react";
import {
  Links,
  Logo,
  NavbarContainer,
  NavLinks,
  NavLinksContainer,
  RouteLink,
} from "./Navbar.css";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>vALORanT</Logo>
      <NavLinksContainer>
        <NavLinks>
          <Links>
            <RouteLink to="/">Agents</RouteLink>
          </Links>

          <Links>
            <RouteLink to="/arsenal">Arsenal </RouteLink>
          </Links>

          <Links>
            <RouteLink to="/maps">Maps</RouteLink>
          </Links>
        </NavLinks>
      </NavLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
