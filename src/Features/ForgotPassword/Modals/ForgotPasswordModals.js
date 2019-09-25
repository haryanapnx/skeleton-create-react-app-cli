import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ForgotPasswordContent from './ForgotPasswordContent'


class ForgotPasswordModal extends React.Component {

   toggle = () => { this.props.modalToggleReset() }

   render() {
      const { isOpen, data, token } = this.props
      return (
         <div>
         <Modal isOpen={isOpen} toggle={this.toggle} backdrop>
            <ModalHeader toggle={this.toggle}>ForgotPassword</ModalHeader>
            <ModalBody>
               <ForgotPasswordContent data={data} token={token} toggle={this.toggle} />
            </ModalBody>  
         </Modal>
         </div>
      );
   }
}

export default ForgotPasswordModal;