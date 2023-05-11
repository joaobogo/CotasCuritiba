import styled from "styled-components";

const ParentMenu = styled.div`

  @keyframes fadeIn {
    from {
      height: 0;
    }
    to {
      height: 100px;
    }
  }

  @keyframes fadeOut {
    from {
      height: 100px;
    }
    to {
      height: 0;
    }
  }

  .menu {
    height: 15px;
    animation: fadeIn 0.5s ease-in;
  }

  .hidden {
    height: 0;
    animation: fadeOut 0.5s ease-in;
    overflow: hidden;
  }
  @media (max-width: 768px) {
  }
`;

export default ParentMenu;
