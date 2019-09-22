import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Dashboard.module.css';
import { loginSuccess } from '../../redux/actions/authActions';

export const DashboardContext = React.createContext({});

class Dashboard extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <h1>Header</h1>
        </div>
        <div></div>
        <div>
          <h1>Calendar</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginSuccess: session => dispatch(loginSuccess(session))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
