import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { getToken } from '../../redux/selectors/selectors';

const Login = ({ token }) => (
  <>
    <h1>Login/Register</h1>
    {token ? <Redirect to="/dashboard" /> : <AuthForm />}
  </>
);

const mapStateToProps = state => ({
  token: getToken(state)
});

export default connect(mapStateToProps)(Login);
