import React, { Component } from 'react';
import styles from './fullCalendar.module.css';
import {
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  addMonths,
  subMonths,
  format,
  addDays,
  parse,
  isSameMonth,
  isSameDay
} from 'date-fns';
import Icon from '../../components/Icon/Icon';

class Calendar extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  renderHeader() {
    const dateFormat = 'MMMM yyyy';
    return (
      <div className={`${styles.header} ${styles.row} ${styles.flexMiddle}`}>
        <div className={`${styles.col} ${styles.colStart}`}>
          <button type="button" className={styles.iconBtn} onClick={this.prevMonth}>
            <Icon icon="ArrowLeft" className={styles.icon} />
          </button>
        </div>
        <div className={`${styles.col} ${styles.colCenter}`}>
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className={`${styles.col} ${styles.colEnd}`} onClick={this.nextMonth}>
          <button type="button" className={styles.iconBtn}>
            <Icon icon="ArrowRight" className={styles.icon} />
          </button>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = 'dddd';
    const days = [];
    let startDate = startOfWeek(this.state.currentMonth);

    console.log('format', format(startDate, dateFormat));

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={`${styles.col} ${styles.colCenter}`} key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className={`${styles.days} ${styles.row}`}>{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = 'd';
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`${styles.col} ${styles.cell} ${
              !isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day, selectedDate) ? 'selected' : ''
            }`}
            key={day}
            onClick={() => this.onDateClick(parse(cloneDay))}
          >
            <span className={styles.number}>{formattedDate}</span>
            <span className={styles.bg}>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={styles.row} key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  render() {
    return (
      <div className={styles.calendarContainer}>
        <h2>Calendar</h2>
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;
