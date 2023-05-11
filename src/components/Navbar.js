import React, { useState } from "react";
import NavbarContainer from "./styles/navbarstyles/Navbar.styles";
import Logo from "./styles/navbarstyles/Logo.styles";
import Menu from "./styles/navbarstyles/Menu.styles";
import MenuItem from "./styles/navbarstyles/MenuItem.styles";
import Hamburger from "./styles/navbarstyles/Hamburger.styles";
import logo from "./assets/logo.png";
import ParentMenu from "./styles/navbarstyles/ParentMenu.styles";
import MenuDesktop from "./styles/navbarstyles/MenuItemsDesktop.styles";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <NavbarContainer>
        <Logo src={logo}></Logo>

        <MenuDesktop>
          <a href="#funciona">Como Funciona?</a>
          <a href="#qa">Perguntas Frequentes</a>
        </MenuDesktop>

        <Hamburger onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
      </NavbarContainer>

      <Menu
        className={isMenuOpen ? "menu" : "hidden"}
        style={{ display: isMenuOpen ? "flex" : "none" }}
      >
        <MenuItem className={isMenuOpen ? "active" : "none"} href="/">
          Como Funciona?
        </MenuItem>
        <MenuItem className={isMenuOpen ? "active" : "none"} href="/contact">
          Perguntas Frequentes
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
