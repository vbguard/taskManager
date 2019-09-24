import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { getToken } from "../../redux/selectors/selectors";
import Header from "../../components/Header/Header";

const Login = ({ token }) => (
  <>
    {token ? (
      <Redirect to="/dashboard" />
    ) : (
      <>
        {/* <Header match={this.props.match} /> */}
        <p>sdfksdfkj</p>
        <AuthForm />
      </>
    )}
  </>
);

const mapStateToProps = state => ({
  token: getToken(state)
});

export default connect(mapStateToProps)(Login);
