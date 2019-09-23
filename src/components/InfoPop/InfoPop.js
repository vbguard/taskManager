import React from 'react';
import styles from './InfoPop.module.css';
import Svg from '../Icon/Icon';
import windowSize from 'react-window-size';

const {
  infoContainer,
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

const InfoPop = ({ windowWidth }) => (
  <div className={infoContainer}>
    <div className={header}>
      <Svg icon="Info" className={svgInfo} />
      <p className={titleInfo}>Информация</p>
      <button type="button" className={buttonClose}>
        <Svg icon="Clear" className={svgClear} />
      </button>
    </div>
    {windowWidth >= 768 && <h1 className={title}>Управляйте своими делами с TaskTracker</h1>}
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
          <p className={numberStyleOrange.join(' ')}>1</p>
        </div>
        <p className={hyphen}>-</p>
        <p className={text}>Количество повторяющихся задач</p>
      </li>
      <li className={listItem}>
        <div className={iconContainer}>
          <p className={numberStyleGreen.join(' ')}>2</p>
        </div>
        <p className={hyphen}>-</p>
        <p className={text}>Количество неповторяющихся задач</p>
      </li>
    </ul>
  </div>
);

export default windowSize(InfoPop);
