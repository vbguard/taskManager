import React, { Component } from 'react';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';
// import styles from './Dashboard.module.css';
import { loginSuccess } from '../../redux/actions/auth';
import { Switch, Route } from 'react-router-dom';
import { fetchPosts } from '../../utils/requests.js';

export const DashboardContext = React.createContext({});

const Header = () => (
  <div>
    <h1>Header</h1>
  </div>
);

const Calendar = () => (
  <div>
    <h1>Calendar</h1>
  </div>
);

const AddForm = () => (
  <div>
    <h1>AddForm</h1>
  </div>
);

const Tasks = () => (
  <div>
    <h1>Tasks</h1>
  </div>
);

class Dashboard extends Component {
  state = { desktop: false };

  componentDidMount() {
    const authorization = localStorage.getItem('authorization');

    console.log(
      this.props.getPosts({
        headers: {
          Authorization: authorization
        }
      })()
    );
    // this.props.getPosts({
    //   headers: {
    //     Authorization: authorization
    //   }
    // });
  }

  render() {
    const { windowWidth } = this.props;
    const desktop = 1024;

    return (
      <>
        <Header />
        {windowWidth < desktop && (
          <>
            <Switch>
              <Route path="/dashboard" exact component={Tasks} />
              <Route path="/dashboard/calendar" component={Calendar} />
              <Route path="/dashboard/add" component={AddForm} />
            </Switch>
            <button>+</button>
          </>
        )}
        {windowWidth >= desktop && (
          <>
            <Tasks />
            <Calendar />
            <button>+</button>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginSuccess: session => dispatch(loginSuccess(session)),
  getPosts: () => fetchPosts(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(windowSize(Dashboard));
