import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

// import npm components
import windowSize from 'react-window-size';
import Loader from 'react-loader-spinner';

// import Components
import Calendar from '../../components/Calendar/Calendar';
import TaskContainer from '../../components/Task/TaskContainer';
import AddTask from '../../components/AddTask/AddTask';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import PopUpConfirmDelete from '../../components/PopUpConfirmDelete/PopUpConfirmDelete';
import InfoPop from '../../components/InfoPop/InfoPop';
// import pages

import CalendarPage from '../CalendarPage/CalendarPage';

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
    const { windowWidth, loader, modal, modalInfo, modalCalendar, modalDelete } = this.props;

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
                  <Route path="/dashboard/calendar" component={CalendarPage} />
                  <Route path="/dashboard/add" component={AddTask} />
                </Switch>
              </>
            )}
            {windowWidth >= 1024 && (
              <>
                <div className={styles.dashboardWrap}>
                  <div className={styles.tasksWrapper}>
                    <TaskContainer />
                  </div>
                  <div className={styles.calendarWrapper}>
                    <Calendar />
                  </div>
                  <Switch>
                    <Route path="/dashboard" exact component={TaskContainer} />
                  </Switch>
                </div>
              </>
            )}
          </>
        )}
        {modal && (
          <Modal>
            {modalInfo && <InfoPop />}
            {modalCalendar && <Calendar />}
            {modalDelete && <PopUpConfirmDelete />}
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state),
  loader: getLoader(state),
  modalInfo: state.modal.modalInfo,
  modalCalendar: state.modal.modalCalendar,
  modalDelete: state.modal.modalDelete,
  modal: state.modal.modal
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
