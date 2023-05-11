import styled from "styled-components";

const MenuDesktop = styled.div`
display: flex;
justify-content: space-evenly;
gap: 5vw;

  a {
    text-decoration: none;
    padding: 0 10px;
    margin: 0 5px;
    color: black;
    border: solid var(--tertiary);
    width: 17vw;
    border-radius: 10px;
    font-size: 16px;
  }

  a:hover {
    background-color: var(--secondary);
    transition: 0.3s;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default MenuDesktop;
