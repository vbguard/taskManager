import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as requests from '../../utils/requests.js';
import Header from '../../components/Header/Header';

const INITIAL_STATE = {
  nickname: '',
  password: ''
};

class Login extends Component {
  state = { ...INITIAL_STATE };

  render() {
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <h1>Login/Register</h1>
      </div>
    );
  }
}

const mapDispatchToProps = {};

export default connect(
  null,
  mapDispatchToProps
)(Login);
