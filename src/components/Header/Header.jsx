import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';

class Header extends Component {
  state = {};

  componentDidMount() {
    const { pathname } = this.props;
    console.log('Component Didi Mount Yeah!!!!');
    console.log(pathname.includes('dashboard'));
  }

  render() {
    const { pathname } = this.props;
    return (
      <div>
        {pathname.includes('login') && (
          <div className={styles.wrapperForLogin}>
            <p>TaskTraker</p>
            <p>Организуй свои дела</p>
          </div>
        )}

        {pathname.includes('dashboard') && (
          <div className={styles.wrapperForDashboard}>
            <p>TaskTraker</p>
            <p>N</p>
            <p>Name</p>
            <p>ExitBtn</p>
            <p>Information</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
