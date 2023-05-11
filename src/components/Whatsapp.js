import React from "react";
import WhatsApp from "../components/assets/WhatsApp.png";
import WhatsappContainer from "./styles/whatsappstyles/Whatsapp.styles";

function Whatsapp() {
  return (
    <WhatsappContainer>
      <a href="https://wa.me/554192063723" className="whatsappbtn">
        <img className="imgbutton" alt="Whatsapp Logo" src={WhatsApp} />
      </a>
    </WhatsappContainer>
  );
}

export default Whatsapp;
