import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Header.module.css';
import Icon from '../Icon/Icon';

class Header extends Component {
  state = {};

  componentDidMount() {
    const { match } = this.props;
    console.log('Component Didi Mount');
    console.log(match);
    // console.log(pathname.includes('dashboard'));
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        {match.path.includes('/login') && (
          <div className={styles.wrapperForLogin}>
            <h1 className={`${styles.LoginRegisterLogoMob} Header-LoginRegister-Logo-Mob`}>TaskTraker</h1>
            <h2 className={`${styles.LoginRegisterTaglineMob} Header-LoginRegister-Tagline-Mob`}>
              Организуй свои дела
            </h2>
          </div>
        )}

        {match.path.includes('dashboard') && (
          <div className={styles.wrapperForDashboard}>
            <h1 className={`${styles.LoginRegisterLogoMob} Header-Dashboard-Logo-Mob`}>TaskTraker</h1>
            <nav className={styles.nav}>
              <div className="Header-Dashboard-UserName-Mob">
                <div className={styles.UserNameLetter}>N</div>
              </div>

              <div className={styles.UserName}>Name</div>

              <Icon icon="Logout" className={styles.exitBtn} />
            </nav>
            <button type="button" className={styles.informBtn}>
              <Icon icon="Info" className={styles.informSign} />
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
