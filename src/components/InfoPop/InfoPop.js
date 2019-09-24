import React, { Component, createRef } from "react";
import { closeModal } from "../../redux/actions/modalAction";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import windowSize from "react-window-size";
import styles from "./InfoPop.module.css";
import Icon from "../Icon/Icon";

const {
  infoContainer,
  overlay,
  contentInfo,
  iconContainer,
  hyphen,
  number,
  numberOrange,
  numberGreen,
  addIcon,
  header,
  svgInfo,
  titleInfo,
  title,
  svgClear,
  list,
  listItem,
  text,
  buttonClose
} = styles;

const numberStyleOrange = [number, numberOrange];
const numberStyleGreen = [number, numberGreen];

class InfoPop extends Component {
  state = {};

  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    windowWidth: PropTypes.number.isRequired
  };

  backdropeRef = createRef();

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { closeModal } = this.props;
    if (e.code !== "Escape") return;
    closeModal();
  };

  handleBackDropClick = e => {
    const { closeModal } = this.props;
    const { current } = this.backdropeRef;
    if (current && e.target !== current) return;
    closeModal();
  };

  render() {
    const { windowWidth, closeModal } = this.props;

    return (
      <div
        className={overlay}
        onClick={this.handleBackDropClick}
        ref={this.backdropeRef}
      >
        <div className={infoContainer}>
          <div className={header}>
            <Icon icon="Info" className={svgInfo} />
            <p className={titleInfo}>Информация</p>
            <button type="button" className={buttonClose} onClick={closeModal}>
              <Icon icon="Clear" className={svgClear} />
            </button>
          </div>
          <div className={contentInfo}>
            {windowWidth >= 768 && (
              <h1 className={title}>Управляйте своими делами с TaskTracker</h1>
            )}
            <ul className={list}>
              <li className={listItem}>
                <div className={iconContainer}>
                  <p className={addIcon}>+</p>
                </div>
                <p className={hyphen}>-</p>
                <p className={text}>Добавить новую задачу</p>
              </li>
              <li className={listItem}>
                <div className={iconContainer}>
                  <p className={numberStyleOrange.join(" ")}>1</p>
                </div>
                <p className={hyphen}>-</p>
                <p className={text}>Количество повторяющихся задач</p>
              </li>
              <li className={listItem}>
                <div className={iconContainer}>
                  <p className={numberStyleGreen.join(" ")}>2</p>
                </div>
                <p className={hyphen}>-</p>
                <p className={text}>Количество неповторяющихся задач</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default compose(
  connect(
    null,
    mDTP
  ),
  windowSize
)(InfoPop);
