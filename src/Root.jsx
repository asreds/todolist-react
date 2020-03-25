import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ConfigService from './services/common/config-service';
import Modal from './components/modal';

import App from './components/App';

class Root extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor (props) {
    super(props);
    this.handleModalContent = this.handleModalContent.bind(this);
    this.hideModalContent = this.hideModalContent.bind(this);
    this.state = {
      modalContent: null
    };
  }
  componentDidMount () {
    window.showModalContent = this.handleModalContent;
    window.hideModalContent = this.hideModalContent;
  }
  handleModalContent (modalContent, options = {}) {
    this.setState({ modalContent, options });
  }

  hideModalContent () {
    if (this.state.modalContent) {
      this.setState({ modalContent: null });
    }
  }
  render () {
    let store = this.props.store;
    return (
      <Provider store={store}>
        <BrowserRouter basename={ConfigService.getPublicBasename()}>
          <App />
          {this.state.modalContent ? (
            <Modal {...this.state.options} closeModal={() => this.hideModalContent()}>
              <this.state.modalContent
                closeModal={() => this.hideModalContent()}
              />
            </Modal>
          ) : null}
        </BrowserRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object
};

export default Root;
