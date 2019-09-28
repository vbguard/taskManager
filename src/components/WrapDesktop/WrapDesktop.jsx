import React from 'react';
import TaskContainer from '../Task/TaskContainer';
import Calendar from '../Calendar/Calendar';
import styles from './WrapDesktop.module.css';

const WrappDestop = () => (
  <div className={styles.dashboardWrap}>
    <div className={styles.tasksWrapper}>
      <TaskContainer />
    </div>
    <div className={styles.calendarWrapper}>
      <Calendar />
    </div>
  </div>
);

export default WrappDestop;
