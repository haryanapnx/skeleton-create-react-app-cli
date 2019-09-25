import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ForgotAkunContent from './ForgotAkunContent'


class ForgotAkunModal extends React.Component {

   toggle = () => { this.props.modalToggleReset() }

   render() {
      const { isOpen, data, token } = this.props
      return (
         <div>
         <Modal isOpen={isOpen} toggle={this.toggle} backdrop>
            <ModalHeader toggle={this.toggle}>ForgotAkun</ModalHeader>
            <ModalBody>
               <ForgotAkunContent data={data} token={token} toggle={this.toggle} />
            </ModalBody>  
         </Modal>
         </div>
      );
   }
}

export default ForgotAkunModal;