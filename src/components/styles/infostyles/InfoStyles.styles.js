import styled from "styled-components";

const InfoContainer = styled.div`



  @media (max-width: 768px) {
    display: flex;
    background-color: orange;
    flex-direction: column;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;
    

    .row {
      display: flex;
      
    }

    .square {
      width: 38vw;
      height: 20vh;
      background-color: blue;
    }

    .rectangle {
      width: 55vw;
      height: 20vh;
      background-color: beige;
    }
  }
`;

export default InfoContainer;
