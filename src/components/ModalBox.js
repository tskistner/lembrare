import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.ieModal
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
    this.toggleCancel = this.toggleCancel.bind(this);
  }

  toggleOpen() {
    if (this.onBeforeOpen()) {
      this.setState({
        modal: !this.state.modal
      });
    }
  }

  toggleClose() {
    if (this.onBeforeClose()) {
      this.setState({
        modal: false
      });
    }
  }

  toggleCancel() {
    if (this.onBeforeCancel()) {
      this.setState({
        modal: false
      });
    }
  }

  onBeforeCancel() {
    if (this.props.toValidateCancel) {
      return this.props.toValidateCancel();
    }
    return true;
  }

  onBeforeClose() {
    if (this.props.toValidateClose) {
      return this.props.toValidateClose();
    }
    return true;
  }

  onBeforeOpen() {
    if (this.props.toValidate) {
      return this.props.toValidate();
    }
    return true;
  }

  render() {
    return (
      <div>
        <a className='fake-link' onClick={this.toggleOpen}>{this.props.dsLinkToClick}</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.dsTitle}</ModalHeader>
          <ModalBody>
            {this.props.modalBody}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" className='button-default all' onClick={this.toggleClose}>Ok</Button>
            {' '}
            <Button color="secondary" className='button-default all' onClick={this.toggleCancel}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}