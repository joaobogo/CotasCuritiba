import React from "react";
import FooterContainer from "./styles/footerstyles/Footer.styles";
import logo from './assets/logo.png'
import servopa from "./assets/servopa.png"
import {
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <div className="left">
        <img className="logo" src={logo}></img>
        <img className="servopa" src={servopa}></img>
      </div>

      <div className="right">
      <h4>Contato</h4>
        <p>
        <FaPhone></FaPhone>     +55 41 9206-3723
        </p>
        <p>
        <FaMailBulk></FaMailBulk>    santos.representantepr@outlook.com
        </p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
