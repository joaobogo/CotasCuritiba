import styled from 'styled-components';

const WhatsappContainer = styled.div`
.whatsappbtn {
  position: fixed;
  right: 20px;
  top: 82vh;
  z-index: 5;
}

.whatsappbtn .imgbutton {
  width: 80px;
  height: 80px;
  transition: 0.4s;
  border-radius: 50%;
  border: solid #febc30 2px;
  padding: 0;
}

.whatsappbtn .imgbutton:hover {
  transform: scale(1.2);
}



@media screen and (max-width: 768px) {
  .whatsappbtn {
    right: 60px;
  }

  .whatsappbtn .imgbutton {
    width: 60px;
    height: 60px;
  }
}

@media screen and (max-width: 380px) {

  .whatsappbtn {
    right: 70px;
  }

}

`;

export default WhatsappContainer