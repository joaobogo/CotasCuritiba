import styled from "styled-components";

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin: 2vh;
  
  span {
    height: 2px;
    width: 25px;
    background: #333;
    margin-bottom: 4px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Hamburger;
