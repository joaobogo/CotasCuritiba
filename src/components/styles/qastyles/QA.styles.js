import styled from "styled-components";

const QAcontainer = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  height: auto;

  .body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  h2 {
    font-family: "Times New Roman", Times, serif;
    font-size: 40px;
  }

  .pparent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .mainp {
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
    color: black;
    border: solid red;
    border-radius: 5px;
    width: 45vw;
  }

  .mainp:hover {
    cursor: pointer;
    background-color: red;
    color: white;
    transition: 0.3s;
  }

  .secondaryp {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: black;
    text-align: justify;
    width: 38vw;
    margin-bottom: 4vh;
  }

  .buttoncontainer {
    margin-bottom: 5vh;
    margin-top: 5vh;
  }

  a {
    padding: 1vw;
    background-color: red;
    color: white;
    text-decoration: none;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 2vh;
  }

  a:hover {
    cursor: pointer;
    background-color: lightred;
  }

  @media (max-width: 780px) {
    height: auto;

    .body {
      flex-direction: column;
    }

    .mainp {
      width: 80vw;
    }

    .secondaryp{
      width: 70vw;
    }
    a {
      font-size: 16px;
    }
  }
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgb(25, 167, 206);
  background: linear-gradient(
    90deg,
    rgba(25, 167, 206, 1) 0%,
    rgba(81, 171, 195, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );

  h2 {
    font-size: 40px;
  }

  .mainp {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    border: solid var(--secondary);
    border-radius: 15px;
    background-color: var(--quaternary);
    color: white;
    height: 6vh;
    padding: 4px;
    margin: 15px;
    width: 50vw;
  }

  .mainp:hover {
    cursor: pointer;
  }

  .secondaryp {
    text-align: justify;
    padding: 10px;
  }

  .buttoncontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    border: solid var(--quaternary);
    border-radius: 15px;
    background-color: var(--secondary);
    color: black;
    height: 6vh;
    padding: 4px;
    margin-bottom: 5vh;
    margin: 15px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .buttoncontainer:hover {
    background-color: var(--primary);
    color: black;
  }

  @media (max-width: 768px) {
    height: auto;

    h2 {
      font-size: 35px;
      color: black;
    }

    .mainp {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
      border: solid var(--secondary);
      border-radius: 15px;
      background-color: var(--quaternary);
      color: white;
      height: 6vh;
      padding: 4px;
      margin: 15px;
      width: 80vw;
    }

    .secondaryp {
      text-align: justify;
      padding: 10px;
    }

    .buttoncontainer {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 18px;
      font-family: Arial, Helvetica, sans-serif;
      border: solid var(--quaternary);
      border-radius: 15px;
      background-color: var(--secondary);
      color: black;
      height: 6vh;
      padding: 4px;
      margin-bottom: 5vh;
      margin: 15px;
      width: 80vw;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .buttoncontainer:hover {
      background-color: var(--secondary);
      color: black;
    }
  } */
`;

export default QAcontainer;
