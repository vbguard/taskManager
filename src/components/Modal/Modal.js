import React, { Component } from 'react';
import './Modal.module.css';

class Modal extends Component {
  render() {
    return (
      <div>
        <div className="modal-background" />
        <div role="dialog" className="modal-dialog">
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
