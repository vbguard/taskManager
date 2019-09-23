import React from 'react';
import styles from './InfoPop.module.css';
import Svg from '../Icon/Icon';

const {
  infoContainer,
  iconContainer,
  hyphen,
  numberOrange,
  numberGreen,
  addIcon,
  header,
  svgInfo,
  title,
  svgClear,
  list,
  listItem,
  text,
  buttonClose
} = styles;

const InfoPop = () => (
  <div className={infoContainer}>
    <div className={header}>
      <Svg icon="Info" className={svgInfo} />
      <h1 className={title}>Информация</h1>
      <button type="button" className={buttonClose}>
        <Svg icon="Clear" className={svgClear} />
      </button>
    </div>
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
          <p className={numberOrange}>1</p>
        </div>
        <p className={hyphen}>-</p>
        <p className={text}>Количество повторяющихся задач</p>
      </li>
      <li className={listItem}>
        <div className={iconContainer}>
          <p className={numberGreen}>2</p>
        </div>
        <p className={hyphen}>-</p>
        <p className={text}>Количество неповторяющихся задач</p>
      </li>
    </ul>
  </div>
);

export default InfoPop;
