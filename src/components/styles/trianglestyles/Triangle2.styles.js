import styled from "styled-components";

const Triangle2Container = styled.div`
  background-color: white;
  z-index: -50;
  .white {
    position: relative;
    width: 0;
    height: 0;
    background-color: white;
    border-left: 100vw solid transparent;
    border-bottom: 100px solid black;
  }

  .white:before {
    content: "";
    position: absolute;
    top: -100px;
    left: calc(50% - 1px);
    width: 2px;
    height: 100px;
    background-color: white;
  }
`;
export default Triangle2Container;
