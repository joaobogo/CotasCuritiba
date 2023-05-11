import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  transition: 4s;
background-color: white;

  @keyframes fadeIn {
    from {height:0}
    to{height:25px}
  }

  @keyframes fadeOut{
    from {height:25px}
    to{height:0}
  }

  .active{
    height: 25px;
    animation: fadeIn .5s ease-in;
  }

  .none{
    height: 0;
    animation: fadeOut .5s ease-in;
  }

 

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export default Menu