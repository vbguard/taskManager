import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as requests from '../../utils/requests.js';

const INITIAL_STATE = {
  nickname: '',
  password: ''
};

class Login extends Component {
  state = { ...INITIAL_STATE };

  render() {
    return <h1>Login/Register</h1>;
  }
}

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(Login);
