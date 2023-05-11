import React from "react";
import AboutContainer from "./styles/aboutstyles/About.styles";
import servopa1 from './assets/servopa1966.jpg'

function About() {
  return (
    <AboutContainer>
      <div className="main">

        <div className="left">
          <img src={servopa1}></img>
        </div>

        <div className="right">
          <h2>Porque Nos Escolher?</h2>
          <p>
            Com mais de 55 anos de experiência de mercado, o Consórcio Servopa é
            pioneiro no setor e se destaca até hoje por sua gestão sólida,
            inovadora e segura desde 1966. Proximidade, confiança, tradição e
            excelência são nossos pilares! E nossa vasta lista de clientes
            fidelizados é a comprovação do sucesso desse trabalho. Somos uma
            administradora filiada à Associação Brasileira de Administradoras de
            Consórcios (ABAC) e cumprimos as exigências e determinações impostas
            pelo Banco Central do Brasil corretamente no setor. Em 2021 fomos
            certificados pelo Great Place to Work, como uma das melhores
            empresas para se trabalhar no mundo. Esse título testifica que somos
            uma empresa feita de pessoas, para pessoas! Nosso propósito está em
            ser peça chave para novas conquistas, e essa premissa se estende
            também aos nossos colaboradores. Somos uma das maiores
            administradoras do Sul do País, sediados em Curitiba, e com mais de
            250 parceiros espalhados pelas regiões Sul, Sudeste e Centro-Oeste
            do Brasil.
          </p>
        </div>
      </div>
    </AboutContainer>
  );
}

export default About;
