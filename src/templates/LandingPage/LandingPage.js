import React, { Component, Fragment } from 'react';
import Button from '../../atoms/Button/Button';
import Modal from '../../atoms/Modal/Modal';
import Form from '../../molecules/Form/Form';
import ModalConsumer from '../../core/contexts/ModalConsumer';

const LandingPage = (props) => {

  const CreateRecordModal = ({ onRequestClose, ...otherProps }) => (
    <Modal isOpen onRequestClose={onRequestClose} {...otherProps} component={<Form onRequestClose={onRequestClose} />}>
      <button onClick={onRequestClose}>close</button>
      <div>I am a modal</div>
    </Modal>
  );

  return(
    <Fragment>
      <h1>Hello World</h1>
      <ModalConsumer>
        {({ showModal }) => (
          <Button onClick={() => showModal(CreateRecordModal, { isOpen: true })} text={'Create Record'}></Button>
        )}
      </ModalConsumer>
    </Fragment>
  )
}

export default LandingPage;
