import React, { useState } from "react";
import FormContainer from "./styles/formstyles/FormContainer.styles";
import primeiro from "./assets/firststep.png";
import segundo from "./assets/secondstep.png";
import terceiro from "./assets/thirdstep.png";
import quarto from "./assets/forthstep.png";
import axios from "axios";

const Form = () => {
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

  return (
    <FormContainer>
      <h2>Como Funciona?</h2>
      <div className="mainone">
        <div className="square">
          <img src={primeiro}></img>
          <h3>1º -Escolha seu plano</h3>
          <p>
            Diversas opções para você escolher aquela que melhor se adapta aos
            seus objetivos.
          </p>
        </div>
        <div className="square">
          <img src={segundo}></img>
          <h3>2º- Contribua Mensalmente</h3>
          <p>
            {" "}
            Mantenha os pagamentos em dia para poder participar dos sorteios e
            assembleias.
          </p>
        </div>
        <div className="square">
          <img src={terceiro}></img>
          <h3>3º- Assembleia</h3>
          <p>
            Acompanhe os sorteios mensalmente ou ofereça lances em diferentes
            modalidades.
          </p>
        </div>

        <div className="square">
          <img src={quarto}></img>
          <h3>4º- Hora da Contemplação</h3>
          <p>
            Momento especial de realização da sua conquista. Agora é só definir
            como utilizar seu crédito!
          </p>
        </div>
      </div>

      {/* <h2 id="funciona">Como Funciona?</h2>
      <div className="main">
      <div className="circlecontainer">
        <div className="circle">
          <img src={primeiro} />
        </div>
        <div className="circle">
          <img src={segundo} />
        </div>
        <div className="circle">
          <img src={terceiro} />
        </div>
        <div className="circle">
          <img src={quarto} />
        </div>
      </div>

    

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
        </div> */}
    </FormContainer>
  );
};

export default Form;
