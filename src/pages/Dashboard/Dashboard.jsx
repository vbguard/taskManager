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
import TaskContainer from '../../components/TaskContainer/TaskContainer';
import AddTask from '../../components/AddTask/AddTask';
import EditTask from '../../components/EditTask/EditTask';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import PopUpConfirmDelete from '../../components/PopUpConfirmDelete/PopUpConfirmDelete';
import InfoPop from '../../components/InfoPop/InfoPop';
import WrapDesktop from '../../components/WrapDesktop/WrapDesktop';
// import pages

import CalendarPage from '../CalendarPage/CalendarPage';

// import actions and selectors
import { loginSuccess } from '../../redux/actions/authActions';
import { getUserTasks } from '../../redux/actions/tasksActions';
import { getToken, getLoader, getTasks } from '../../redux/selectors/selectors';

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
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { windowWidth, loader, modal, modalInfo, modalCalendar, modalDelete, taskId } = this.props;

    return (
      <>
        <Header match={this.props.match} location={this.props.location} />
        <div className={styles.wrapper}>
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
                    <Route path="/dashboard/edit" component={EditTask} />
                  </Switch>
                </>
              )}
              {windowWidth >= 1024 && (
                <>
                  <Switch>
                    <Route path="/dashboard" exact component={WrapDesktop} />
                    <Route path="/dashboard/add" component={AddTask} />
                    <Route path="/dashboard/edit" component={EditTask} />
                  </Switch>
                </>
              )}
            </>
          )}
        </div>
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
  modal: state.modal.modal,
  taskId: getTasks(state)
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
