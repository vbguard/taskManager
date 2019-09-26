import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// import npm components
import windowSize from 'react-window-size';
import Loader from 'react-loader-spinner';

// import Components
import Calendar from '../../components/Calendar/Calendar';
import TaskContainer from '../../components/Task/TaskContainer';
import AddForm from '../../components/AddForm/AddForm';
import Header from '../../components/Header/Header';

// import actions and selectors
import { loginSuccess } from '../../redux/actions/authActions';
import { getUserTasks } from '../../redux/actions/tasksActions';
import { getToken, getLoader } from '../../redux/selectors/selectors';

// add styles
import styles from './Dashboard.module.css';
class Dashboard extends Component {
  state = {};

  static propTypes = {
    loader: PropTypes.bool.isRequired,
    modal: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired,
    windowWidth: PropTypes.number.isRequired,
    loginSuccess: PropTypes.func.isRequired,
    getUserTasks: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { token, getUserTasks } = this.props;
    getUserTasks(token);
  }

  render() {
    const { windowWidth, loader } = this.props;

    return (
      <>
        <Header match={this.props.match} />
        {loader ? (
          <Loader type="Oval" color="#284060" height={35} width={35} timeout={3000} />
        ) : (
          <>
            {windowWidth < 1024 && (
              <>
                <Switch>
                  <Route path="/dashboard" exact component={TaskContainer} />
                  <Route path="/dashboard/calendar" component={Calendar} />
                  <Route path="/dashboard/add" component={AddForm} />
                </Switch>
              </>
            )}
            {windowWidth >= 1024 && (
              <>
                {/* // router => /dashboard @DashboardContainer
                    // router => /dashboard/add @AddForm */}
                <div className={styles.dashboardWrap}>
                  <TaskContainer />
                  <Calendar />
                </div>
                <Route path="/dashboard/add" component={AddForm} />
              </>
            )}
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state),
  loader: getLoader(state)
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: session => dispatch(loginSuccess(session)),
  getUserTasks: token => dispatch(getUserTasks(token))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  windowSize
)(Dashboard);
