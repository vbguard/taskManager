import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import '../../stylesheet/fontStyle.css';
import Icon from '../Icon/Icon';

class Header extends Component {
  state = {};

  componentDidMount() {
    const { pathname } = this.props;
    console.log('Component Didi Mount');
    console.log(pathname.includes('dashboard'));
  }

  render() {
    const { pathname } = this.props;
    return (
      <div>
        {pathname.includes('login') && (
          <div className={styles.wrapperForLogin}>
            <h1 className={`${styles.LoginRegisterLogoMob} Header-LoginRegister-Logo-Mob`}>TaskTraker</h1>
            <h2 className={`${styles.LoginRegisterTaglineMob} Header-LoginRegister-Tagline-Mob`}>
              Организуй свои дела
            </h2>
          </div>
        )}

        {pathname.includes('dashboard') && (
          <div className={styles.wrapperForDashboard}>
            <h1 className={`${styles.LoginRegisterLogoMob} Header-Dashboard-Logo-Mob`}>TaskTraker</h1>
            <div className={`${styles.UserNameLetter} Header-Dashboard-UserName-Mob`}>N</div>
            {/* <div>Name</div> */}
            <div>
              ExitBtn
              {/* <Icon /> */}
            </div>
            <button type="button" className={styles.informBtn}>
              Information
            </button>
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
