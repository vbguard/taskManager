import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Task.module.css';

import windowSize from 'react-window-size';
import Icon from '../../components/Icon/Icon';


const refactoringProps = (props) => {
    const {
        isDone,
        dates,
        title,
        description,
        taskNumber
      } = props.task;

    const refactoringProps = {
        isComplete: isDone,
        loopDates: dates,
        taskHeader: (!title) ? 'назва_таски' : title,
        taskDescription: (!description) ? 'опис_таски' : description,
        isLoop: dates.length>1 ? true : false,
        taskNumber: (!taskNumber) ? 'номер_таски' : taskNumber,
    }
    return refactoringProps;
}


class Task extends Component {
    render() {
        const {taskNumber, taskHeader, taskDescription, isLoop, loopDates, isComplete, onEdit, onCompltete}=refactoringProps(this.props);
        const windowWidth = this.props.windowWidth ? this.props.windowWidth : null;
        return (
            <>
              <div className={styles.task}>
                <div className={isComplete ? styles.taskHeaderInactive : styles.taskHeader}>
                    <div className={styles.numberContainer}>
                        <p className={styles.headerNumber}>{taskNumber}. </p>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.headerText}>{taskHeader}</p>
                    </div>
                </div>
                <div className={styles.taskBody}>
                    <p>{taskDescription}</p>
                </div>
                <div className={styles.taskControls}>
                    <div className={styles.taskControlsRepeat}>
                        {isLoop &&(<>
                            <button
                                type="button"
                                disabled={isComplete ? true : false}
                                className={isComplete ? styles.taskControlsRepeatBtnInactive : styles.taskControlsRepeatBtn}>
                                    <Icon icon='Loop'/>
                            </button>
                            {/* <p className={isComplete ? styles.taskControlsDatesInactive : styles.taskControlsDates}>
                                {loopDates}
                            </p> */}
                        </>)}
                    </div>

                    <div className={styles.taskControlsCompleteContainer}>
                        <button
                            className={styles.taskControlsEdit}
                            type="button"
                            onClick={onEdit}>
                                <Icon icon='Edit'/>
                        </button>
                        {windowWidth>768 ? <p>Редактировать</p>:null}
                        <button type="button"
                            disabled={isComplete ? true : false}
                            className={isComplete ? styles.taskControlsDoneInactive : styles.taskControlsDone}
                            onClick={onCompltete}>
                                <Icon icon='Done'/>
                        </button>
                        {windowWidth>768 ? (isComplete ? <p>Выполнено</p> : <p>Выполнить</p>) : null}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

Task.propTypes = {task: PropTypes.shape({
    taskNumber: PropTypes.string,
    isDone: PropTypes.bool.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    dates:PropTypes.arrayOf(PropTypes.string).isRequired,
    onEdit: PropTypes.func,
    onCompltete: PropTypes.func})
}

Task.defaulProps = {
    taskHeader: '',
    description: 'опис_таски',
    title: 'назва_таски',
    onEdit: () => {},
    onCompltete:  () => {},
}

export default windowSize(Task);
