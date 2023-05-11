import styled from "styled-components";

const FooterContainer = styled.div`
  height: auto;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;

  .servopa {
    width: 30%;
    height: 30%;
  }

  .logo {
    width: 40%;
  }

  .left {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60%;
  }

  h4 {
    font-family: 'Times New Roman', Times, serif;
    color: red;
    font-size: 18px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .left {
      flex-direction: column;
    }
    .logo {
      width: 70vw;
      height: 50%;
    }

    .servopa {
      width: 80%;
    }

    h4 {
      font-family: Arial, Helvetica, sans-serif;
      color: var(--quaternary);
      font-size: 18px;
    }

    p {
      font-family: Arial, Helvetica, sans-serif;
      color: var(--quaternary);
      font-size: 14px;
    }
  }
`;

export default FooterContainer;
