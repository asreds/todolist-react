import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  render () {
    return (
      <div id="modal" className="modal is-active">
        <div className="modal-background" onClick={() => this.props.closeModal()}/>
        {this.props.children}
        <button className="modal-close is-large" aria-label="close" onClick={() => this.props.closeModal()}/>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
};
