import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: black;
  position: relative;
  margin-bottom: -20px;
  width: 100%;
  height: 450px;
  /* z-index: -50; */

  /* &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    transform-origin: top left;
    transform: skewY(-4deg);
    z-index: -50;
  } */

  .main {
    display: flex;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .right {
    margin-top: -5vh;
    display: flex;
    width: 40vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left {
    display: flex;
    width: 40vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 40px;
  }

  p {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    text-align: justify;
    margin-top: -2vh;
  }

  @media (max-width: 780px) {
    height: 130vh;
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 10vh;
      gap: 25px;
    }

    .right {
      width: 80vw;
    }

    img{
      width: 80vw;
    }
  }

  @media (max-width: 380px) {
    height: 150vh;

    
  }
`;

export default AboutContainer;
