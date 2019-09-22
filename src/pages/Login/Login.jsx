import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AuthForm from '../../components/AuthForm/AuthForm';
import { getToken } from '../../redux/selectors/selectors';

const Login = ({ token }) => <>{token ? <Redirect to="/dashboard" /> : <AuthForm />}</>;

const mapStateToProps = state => ({
  token: getToken(state)
});

export default connect(mapStateToProps)(Login);
