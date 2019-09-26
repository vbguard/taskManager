import React from 'react';
import Calendar from '../../components/Calendar/Calendar';
import styles from './calendarPage.module.css';
import { GoToTasks } from '../../components/CalendarButton/CalendarButton';

const CalendarPage = () => (
  <div className={styles.calendarWrap}>
    <Calendar />
    <GoToTasks />
  </div>
);

export default CalendarPage;
