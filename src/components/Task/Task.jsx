import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Task.module.css'

export default class Task extends Component {

    render() {
        return (
            <div className={styles.task}>
                <div className={styles.taskHeader}>
                    <p>
                        <span className={styles.headerNumber}>1. </span>
                        <span className={styles.headerText}>Подготовка документации</span>
                    </p>
                </div>
                <div className="taskBody">
                    <p>taskBody</p>
                </div>
                <div className="taskControls">
                    <p>taskControls</p>
                </div>
            </div>
        )
    }
}

Task.propTypes = {
    prop: PropTypes
}