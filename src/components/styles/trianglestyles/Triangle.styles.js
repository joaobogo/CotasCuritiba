import styled from 'styled-components';

const TriangleContainer = styled.div`
background-color: black;
z-index: -50;
.white{
    position: relative;
    width: 0;
    height: 0;
    background-color: black;
border-left: 100vw solid transparent;
border-bottom: 100px solid white;
}

.white:before{
    content: '';
    position: absolute;
    top: -100px;
    left: calc(50% - 1px);
    width: 2px;
    height: 100px;
    background-color: #000;
}


`;
export default TriangleContainer