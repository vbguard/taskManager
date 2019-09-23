import React, { Component, createRef } from "react";
import PropTypes from "prop-types";
import styles from "./InfoPop.module.css";
import Icon from "../Icon/Icon";
import windowSize from "react-window-size";

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
    onClose: PropTypes.func.isRequired,
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
    if (e.code !== "Escape") return;
    this.props.onClose();
  };

  handleBackDropClick = e => {
    const { current } = this.backdropeRef;
    if (current && e.target !== current) return;
    this.props.onClose();
  };

  render() {
    const { windowWidth, onClose } = this.props;

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
            <button type="button" className={buttonClose} onClick={onClose}>
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

export default windowSize(InfoPop);
