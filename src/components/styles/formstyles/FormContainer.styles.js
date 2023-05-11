import styled from "styled-components";

const FormContainer = styled.div`

background-color: white;
  position: relative;
  margin-bottom: -20px;
  width: 100%;
  height: 600px;
    /* z-index: -50; */

  /* &::after {
    content: '';
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

  h2{
    font-family: 'Times New Roman', Times, serif;
    font-size: 40px;
    padding-top: 10vh;
    padding-bottom: 5vh;
  }

  .mainone{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .square{
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .square p{
    text-align: justify;
  }
  .square img{
width: 10vw;
height: 20vh;
  }

  @media (max-width: 768px) {
height: 120vh;

    h2{
      font-size: 30px;

      padding-bottom: 0;
    }

    .mainone{
      flex-wrap: wrap;
    }

    .square{
      width: 42vw;
    }

    .square p{
      font-family: Arial, Helvetica, sans-serif;
    }
    .square img{
width: 35vw;
height: 20vh;
  }
  }

  @media (max-width: 380px) {
height: 140vh;

  }

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15vh;
  background: rgb(25, 167, 206);
  background: linear-gradient(
    90deg,
    rgba(25, 167, 206, 1) 0%,
    rgba(81, 171, 195, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  width: 100vw;
  margin: 0;

  .main {
    margin-top: -10vh;
    display: flex;
    width: 100vw;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 15vh;
  }

  h2 {
    font-size: 40px;
  }

  .circle {
    display: flex;
    align-items: center;
    width: 20vw;
    height: 60vh;
    border-radius: 20px;
    box-shadow: 0 0 60px white;
    overflow: hidden;
    border: solid;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .circlecontainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 50vw;
    gap: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: space-evenly;
    height: 90vh;
    width: 40vw;
    box-shadow: 0 0 10px white;
    border-radius: 10px;
    border: solid 3px var(--quaternary);
    margin-bottom: 15vh;
  }

  form h4 {
    color: black;
    margin: 10px;
    font-size: 18px;
  }

  form label {
    width: 30vw;
    text-align: left;
    font-size: 16px;
  }

  form input {
    width: 30vw;
    border-radius: 30px;
    border: solid 2px var(--quaternary);
    padding: 5px;
  }

  .button {
    width: 40%;
    height: 8vh;
    margin: 1vh;
    border-radius: 30px;
    border: solid 2px var(--secondary);
    background-color: var(--quaternary);
    color: white;
    font-size: 16px;
  }

  .button:hover {
    background-color: var(--secondary);
    color: black;
    cursor: pointer;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    height: 110vh;
    background-color: var(--primary);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
      margin-bottom: 10vh;
      font-size: 40px;
      color: black;
    }

    h3 {
      color: white;
    }

    h4 {
      font-size: 20px;
    }

    .button {
      width: 40%;
      height: 4vh;
      margin: 1vh;
      border-radius: 30px;
      border: solid 2px var(--secondary);
      background-color: var(--quaternary);
      color: white;
    }

    .button:hover {
      background-color: var(--secondary);
      color: black;
    }

    .main {
      display: flex;
      flex-direction: column;
      gap: 5vh;
    }

    .circlecontainer {
      width: 100vw;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: -10vh;
    }

    .circle {
      font-family: Arial, Helvetica, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 40vw;
      height: 25vh;
      border-radius: 20px;
      box-shadow: 0 0 60px var(--secondary);
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
    }

    form {
      display: flex;
      flex-direction: column;
      background: white;
      align-items: center;
      justify-content: space-evenly;
      height: 50vh;
      width: 80vw;
      box-shadow: 0 0 10px black;
      border-radius: 10px;
      background-color: var(--secondary);
      border: solid 1px var(--quaternary);
      margin-bottom: 0;
    }

    form h4 {
      margin: 10px;
      font-size: 18px;
    }

    form label {
      width: 60vw;
      text-align: left;
      font-size: 16px;
    }

    form input {
      width: 60vw;
      border-radius: 30px;
      border: solid 1px var(--quaternary);
      padding: 5px;
    }
  }

  @media (max-width: 380px) {
    height: 145vh;

    h2 {
      margin-top: 2vh;
      color: black;
    }

    .circle {
      height: 30vh;
    }

    .circlecontainer {
      gap: 5px;
    }
  } */
`;

export default FormContainer;
