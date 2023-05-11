import React, { useState } from "react";
import InfoContainer from "./styles/infostyles/InfoStyles.styles";

function InfoPage() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <InfoContainer>
      <h2>Fique Por Dentro do Assunto</h2>
      <div className="row">
        <button className="square" onClick={() => setShow(!show)}></button>
        {show && <div className="rectangle"></div>}
      </div>
      <div className="row">
        <button className="square" onClick={() => setShow2(!show2)}></button>
        {show2 && <div className="rectangle"></div>}
      </div>
      <div className="row">
        <button className="square" onClick={() => setShow3(!show3)}></button>
        {show3 && <div className="rectangle"></div>}
      </div>
    </InfoContainer>
  );
}

export default InfoPage;
