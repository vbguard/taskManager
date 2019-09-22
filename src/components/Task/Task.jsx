import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Task.module.css';

import * as Icons from '../../assets/icons';
import Icon from '../../components/Icon/Icon';

const arrow = Icon(Icons.Arrow);

console.log('Icons.Arrow=', Icons.Arrow);
console.log('typeof Icons.Arrow=', typeof Icons.Arrow);

console.log('arrow=', arrow);
console.log('typeof arrow=', typeof arrow);

console.log('Icon=', Icon);
console.log('typeof Icon=', typeof Icon);

export default class Task extends Component {

    render() {
        return (
            <>
            <div className={styles.task}>
                <div className={styles.taskHeader}>
                    <div className={styles.numberContainer}>
                        <p className={styles.headerNumber}>1. </p>
                    </div> 
                    <div className={styles.textContainer}>
                        <p className={styles.headerText}>Подготовка документации</p>
                    </div> 
                </div>
                <div className={styles.taskBody}>
                    <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться</p>
                </div>
                <div className={styles.taskControls}>
                    <div className={styles.taskControlsRepeat}>
                        <button type="button">
                            <Icon icon='Loop'/>
                        </button>
                        <p>17,19,24</p>
                    </div>
                    <div className={styles.taskControlsCompleteContainer}>
                        <button type="button">
                            <Icon icon='Edit'/>
                        </button>
                        <button type="button" className={styles.taskControlsDone}>
                            <Icon icon='Done'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.task}>
            <div className={styles.taskHeader}>
                <div className={styles.numberContainer}>
                        <p className={styles.headerNumber}>2. </p>
                </div> 
                <div className={styles.textContainer}>
                        <p className={styles.headerText}>Разработка интерфейсов: разбор заданий</p>
                </div>
            </div>
            <div className={styles.taskBody}>
                    <p>Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32</p>
            </div>
            <div className="taskControls">
                
                <p>taskControls</p>
            </div>
        </div>
        </>
        )
    }
}

Task.propTypes = {
    prop: PropTypes
}