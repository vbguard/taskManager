import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

import windowSize from 'react-window-size';
import Icon from '../../components/Icon/Icon';

class Task extends Component {
  render() {
    const {
      taskNumber,
      taskHeader,
      taskDescription,
      isLoop,
      loopDates,
      isComplete,
      onEdit,
      onCompltete
    } = this.props.task;
    const windowWidth = this.props.windowWidth;
    const refactoringDates = loopDates.join(',');

    return (
      <>
        {/* added fixed html to test */}
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
              {isLoop && (
                <>
                  <button
                    type="button"
                    disabled={isComplete ? true : false}
                    className={isComplete ? styles.taskControlsRepeatBtnInactive : styles.taskControlsRepeatBtn}
                  >
                    <Icon icon="Loop" />
                  </button>
                  <p className={isComplete ? styles.taskControlsDatesInactive : styles.taskControlsDates}>
                    {refactoringDates}
                  </p>
                </>
              )}
            </div>

            <div className={styles.taskControlsCompleteContainer}>
              <button className={styles.taskControlsEdit} type="button" onClick={onEdit}>
                <Icon icon="Edit" />
              </button>
              {windowWidth > 768 ? <p>Редактировать</p> : null}
              <button
                type="button"
                disabled={isComplete ? true : false}
                className={isComplete ? styles.taskControlsDoneInactive : styles.taskControlsDone}
                onClick={onCompltete}
              >
                <Icon icon="Done" />
              </button>
              {windowWidth > 768 ? isComplete ? <p>Выполнено</p> : <p>Выполнить</p> : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    taskNumber: PropTypes.number.isRequired,
    taskHeader: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
    isLoop: PropTypes.bool.isRequired,
    loopDates: PropTypes.arrayOf(PropTypes.number).isRequired,
    isComplete: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onCompltete: PropTypes.func.isRequired
  })
};

// Task.defaulProps = {
//     taskNumber: null,
//     taskHeader: '',
//     taskDescription: '',
//     isLoop: false,
//     loopDates: null,
//     isComplete: false,
//     onEdit: () => {},
//     onCompltete:  () => {},
// }

export default windowSize(Task);
