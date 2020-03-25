import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Flex from './common/glamorous/Flex';
import Todo from './todo';

const App = ({ location, history }) => {
  return (
    <Flex column height="100%" width="100%" justifyContent="space-between">
      <div className="container">
        <Todo />
      </div>
      <Footer />
    </Flex>
  );
};

App.propTypes = {
  location: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object)
};

export default withRouter(App);
