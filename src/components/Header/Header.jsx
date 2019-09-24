import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Header.module.css";
import Icon from "../Icon/Icon";
import InfoPop from "../../components/InfoPop/InfoPop";
import { openModal } from "../../redux/actions/modalAction.js";
import { getModal } from "../../redux/selectors/selectors";

import { logout } from "../../redux/actions/authOperations";

class Header extends Component {
  state = {};

  componentDidMount() {
    const { match } = this.props;
    console.log("Component Didi Mount");
    console.log(match);
    // console.log(pathname.includes('dashboard'));
  }

  render() {
    const { match, modal, openModal } = this.props;
    return (
      <div>
        {match.path.includes("/login") && (
          <div className={styles.wrapperForLogin}>
            <h1
              className={`${styles.LoginRegisterLogoMob} Header-LoginRegister-Logo-Mob`}
            >
              TaskTraker
            </h1>
            <h2
              className={`${styles.LoginRegisterTaglineMob} Header-LoginRegister-Tagline-Mob`}
            >
              Организуй свои дела
            </h2>
          </div>
        )}

        {match.path.includes("dashboard") && (
          <div className={styles.wrapperForDashboard}>
            <h1
              className={`${styles.LoginRegisterLogoMob} Header-Dashboard-Logo-Mob`}
            >
              TaskTraker
            </h1>
            <nav className={styles.nav}>
              <div className="Header-Dashboard-UserName-Mob">
                <div className={styles.UserNameLetter}>N</div>
              </div>

              <div className={styles.UserName}>Name</div>

              <Icon icon="Logout" onClick={logout} className={styles.exitBtn} />
            </nav>
            <div className={styles.informBtn}>
              <Icon
                icon="Info"
                onClick={openModal}
                className={styles.informSign}
              />
            </div>
            {modal && <InfoPop />}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: getModal(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
  logout
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
