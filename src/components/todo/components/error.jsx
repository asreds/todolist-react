import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Error extends Component {
  render () {
    return (
      <div className="notification is-danger">
        {this.props.message}
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string.isRequired
};
