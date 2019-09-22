import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Dashboard.module.css';
import Task from '../../components/Task/Task';

export const DashboardContext = React.createContext({});

class Dashboard extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <>
        <h1>Header</h1>
        <h1>Task</h1>
        <h1>Calendar</h1>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
