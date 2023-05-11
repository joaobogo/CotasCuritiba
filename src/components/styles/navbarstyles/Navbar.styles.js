import styled from 'styled-components';

const NavBarContainer = styled.nav`
  background-color: var(--primary);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
border-bottom: solid 2px;
border-radius:  0 0 15px 15px   ;
height: 15vh;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default NavBarContainer