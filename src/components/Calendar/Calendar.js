import React, { Component } from 'react';
import styles from '../../pages/CalendarPage/calendarPage.module.css';
import InfiniteCalendar from 'react-infinite-calendar';

class Calendar extends Component {
  state = {};

  render() {
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return (
      <div className={styles.calendarContainer}>
        <InfiniteCalendar selected={today} minDate={lastWeek} />
      </div>
    );
  }
}

export default Calendar;
