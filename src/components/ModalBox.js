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
    const ieLink = this.props.dsLinkToClick ?
      <a className='fake-link' onClick={this.toggleOpen}>{this.props.dsLinkToClick}</a> : null;

    const ieBtOpen = this.props.ieButtonToClick ?
      <Button onClick={this.toggleOpen} className='button-default' >{this.props.ieButtonToClick}</Button>
      : null;

    const hiddenButton = this.props.ieHiddenButton ?
      <Button id={'bt_modal_hidden_'.concat(this.props.ieHiddenButton)} onClick={this.toggleOpen} hidden >
        {this.props.ieHiddenButton}</Button> : null;

    const btOk = this.props.ieBtOk ?
      <Button color="secondary" className='button-default' onClick={this.toggleClose}>Ok</Button> : null;

    const btCancel = this.props.ieBtCancel ?
      <Button color="secondary" className='button-default' onClick={this.toggleCancel}>Cancelar</Button> : null;

    return (
      <div>
        {hiddenButton}
        {ieBtOpen}
        {ieLink}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.dsTitle}</ModalHeader>
          <ModalBody>
            {this.props.modalBody}
          </ModalBody>
          <ModalFooter>
            {btOk}{' '}{btCancel}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}