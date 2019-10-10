import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import AuthContent from './AuthContent'


class AuthModal extends React.Component {

   toggle = () => { this.props.modalToggleReset() }

   render() {
      const { isOpen, data, token } = this.props
      return (
         <div>
         <Modal isOpen={isOpen} toggle={this.toggle} backdrop>
            <ModalHeader toggle={this.toggle}>Auth</ModalHeader>
            <ModalBody>
               <AuthContent data={data} token={token} toggle={this.toggle} />
            </ModalBody>  
         </Modal>
         </div>
      );
   }
}

export default AuthModal;