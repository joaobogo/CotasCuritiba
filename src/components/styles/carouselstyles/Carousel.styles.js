import styled from "styled-components";

const CarouselContainer = styled.div`
  /* background: url(${(props) => props.desktop}) no-repeat; */
  /* background-size: contain;
  min-height: 35vw;
  width: 100vw; */


  background-color: black;
  position: relative;
  margin-bottom: -20px;
  width: 100%;
  height: 500px;
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
    transform-origin: top right;
    transform: skewY(-4deg);
    z-index: -50;
  } */

  .insidebar{
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
  }

  .text{
    width: 30vw;
    height: 40vh;
    margin-left: 10vw;
  }

  h1{
    font-family: 'Times New Roman', Times, serif;
    color: white;
    text-align: left;
    font-size: 40px;
  }

  .text p{
    color: white;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
  }

  .formcontainer{
position: absolute;
left: 50vw;
bottom: 3vh;

  }

  form {
    position: relative;
    z-index: 50;
    display: flex;
    flex-direction: column;
    background-color: red;
    align-items: center;
    justify-content: space-evenly;
    height: 80vh;
    width: 40vw;
  border: solid white;
  gap: 10px;
  margin-bottom: -20vh;
  }

  form h4 {
    font-family:Arial, Helvetica, sans-serif;
    color: black;
    margin: 10px;
    font-size: 18px;
  }

  form label {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 31vw;
    text-align: left;
    font-size: 16px;
  }

  form input {
    width: 30vw;
    height: 4vh;
    border-radius: 5px;
    border: solid 2px white;
    padding: 5px;
  }

  .button {
    width: 40%;
    height: 8vh;
    margin: 1vh;
    border-radius: 5px;
    border: solid 2px white;
    background-color: darkgray;
    color: black;
    font-size: 16px;
  }

  .button:hover {
    background-color: red;
    color: darkgray;
    cursor: pointer;
    transition: 0.3s;
  }

  .body{
    display: flex;
  }

  @media (max-width: 768px) {
    height: 120vh;

    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      text-align: center;
      margin-left:-1vw;
    }

    h1{
      font-size: 30px;
      padding: 3vw;
      text-align: center;
    }

    .text p{
      text-align: center;
      font-size: 18px;
      padding: 3vw;
      width: 70vw;
    }

    .formcontainer{
position: absolute;
left: 10vw;

  }

  form{
    width: 80vw;
  }

  form label {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 72vw;
    text-align: left;
    font-size: 16px;
  }

  form input {
    width: 70vw;
    height: 4vh;
    border-radius: 5px;
    border: solid 2px white;
    padding: 5px;
  }

  .button {
    width: 40%;
    height: 4vh;
    margin: 1vh;
    border-radius: 5px;
    border: solid 2px white;
    background-color: darkgray;
    color: black;
    font-size: 16px;
  }

  }

  @media (max-width: 380px) {
height: 130vh;

    h1{
      font-size: 30px;
      padding: 3vw;
      width: 70vw;
    }

    .text{
margin-top: 5vh;
    }
    .text p{
      margin-top: -2vh;
      text-align: center;
    }
  }
`;

export default CarouselContainer;
