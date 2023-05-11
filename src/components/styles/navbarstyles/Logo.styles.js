import styled from 'styled-components';

const Logo = styled.img`
 width: 20vw;
 height: 20vh;



@media (max-width: 768px) {
 width: 50vw;
 height: 13vh;
 padding-left: 4vw;
}

@media (max-width: 380px) {
    padding-left: 3vw;
}
`;

export default Logo