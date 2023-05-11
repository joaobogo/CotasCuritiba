import styled from "styled-components";

const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  padding: 0 10px;
  margin: 0 5px;
  color: var(--tertiary);
  border: solid;
  width: 17vw;
  border-radius: 20px;
  font-size: 16px;

  &:hover {
    color: var(--primary);
    background-color: var(--tertiary);
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    color: #333;
    text-decoration: none;
    padding: 0 10px;
    margin: 0 5px;
    color: var(--tertiary);
    border: solid;
    width: 50vw;
    border-radius: 20px;

    &:hover {
      color: var(--primary);
      background-color: var(--tertiary);
    }
  }
`;
export default MenuItem;
