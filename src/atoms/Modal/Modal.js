import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  display: block;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  display:flex;
  justify-content: center;
  align-items: center;
`

const ModalBox = styled.div`
  z-index: 1000;
  width: 80%;
  height: 80%;
  background-color: white;
  display:flex;
  justify-content: center;
`

const Modal = (props) => {
  return(
    <ModalBackground>
      <ModalBox>
        {props.component}
      </ModalBox>
    </ModalBackground>
  )
};

export default Modal;
