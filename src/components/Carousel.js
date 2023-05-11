import React, { useState, useEffect } from "react";
import mainphoto from "./assets/consorciocarro.jpg";
import mainphoto2 from "./assets/consorciomoto.jpg";
import CarouselContainer from "./styles/carouselstyles/Carousel.styles";
import desktopcarro from "./assets/consorciocarrodesktop.jpg";
import desktopmoto from "./assets/consorciomotodesktop.jpg";
import Logo from "./styles/navbarstyles/Logo.styles";
import logo from "./assets/logowhite.png";
import axios from "axios";

const banners = [
  {
    bgimage: mainphoto,
    desktop: desktopcarro,
  },
  {
    bgimage: mainphoto2,
    desktop: desktopmoto,
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  function handleChange(event) {
    const inputname = event.target.name;
    setContact({ ...contact, [inputname]: event.target.value });
  }

  const sendMeEmail = (params) => {
    const data = {
      service_id: "service_ujkdmj1",
      template_id: "template_0wnpiak",
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        from_name: params.name,
        reply_to: params.reply_to,
        message: params.phone,
        subject: "Proposta Enviada",
      },
    };

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
  };

  function handleClick(event) {
    event.preventDefault();
    const name = contact.name;
    const phone = contact.phone;
    const reply_to = contact.email;
    const my_name = "Paulo";
    const message =
      "https://drive.google.com/file/d/1qze3ZEHShWOR5U8KvTV3lDIEdZQcHlPc/view?usp=share_link";

    const data = {
      service_id: "service_ujkdmj1",
      template_id: "template_s8fnhdg",
      user_id: process.env.REACT_APP_USER_ID,
      template_params: { name, message, phone, reply_to, my_name },
    };

    axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
    setContact({ name: "", email: "", phone: "" });
    sendMeEmail({ name, phone, reply_to });
  }
  // const changeBanner = () => {
  //   setIndex((prevIndex) => {
  //     if (prevIndex >= banners.length - 1) {
  //       return 0;
  //     } else {
  //       return prevIndex + 1;
  //     }
  //   });
  // };

  // useEffect(() => {
  //   const interval = setInterval(changeBanner, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <CarouselContainer
      // bgimage={banners[index].bgimage}
      // desktop={banners[index].desktop}
    >
      <div className="insidebar">
        <Logo src={logo}></Logo>
      </div>

      <div className="body">
        <div className="text">
          <h1>Consórcios Seguros, para o que você precisa.</h1>
          <p>
            O Consórcio Servopa está aqui desde 1966, garantindo a compra do seu
            imóvel, carro ou moto. Com mais de 250.000 cartas de créditos
            contempladas, estamos entre as 10 maiores administradoras de
            consórcio independentes do país segundo o ranking do Banco Central.
          </p>
        </div>

        <div className="formcontainer">
          <form>
            <h4>Interessado em receber a nossa tabela? Se cadastre abaixo.</h4>
            <label>Nome Completo:</label>
            <input
              onChange={handleChange}
              name="name"
              value={contact.name}
              type="text"
              placeholder="Nome Completo"
            ></input>
            <label>Email:</label>
            <input
              onChange={handleChange}
              name="email"
              value={contact.email}
              type="email"
              placeholder="email"
            ></input>
            <label>Telefone:</label>
            <input
              onChange={handleChange}
              name="phone"
              value={contact.phone}
              placeholder="(11) 99999-9999"
            />
            <button onClick={handleClick} className="button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
