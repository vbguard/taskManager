import React, { Component } from 'react';
import cx from 'classnames';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/ru';
import Icon from '../Icon/Icon';

class TaskCalendar extends Component {
  state = {
    date: moment(),
    oneDayTaskBtn: 2,
    repitedTasksBtn: 3
  };

  render() {
    const { oneDayTaskBtn, repitedTasksBtn } = this.state;

    return (
      <Calendar
        onChangeMonth={date => this.setState({ date })}
        date={this.state.date}
        onPickDate={date => console.log(date)}
        renderDay={({ day, classNames, onPickDate }) => (
          <div
            key={day.format()}
            className={cx(
              'Calendar-grid-item',
              day.isSame(moment(), 'day') && 'Calendar-grid-item--current',
              classNames
            )}
            onClick={e => onPickDate(day)}
          >
            {day.format('D')}

            <div className="Calendar-tasksWrapper">
              <div className="Calendar-oneDayTaskBtn">{oneDayTaskBtn}</div>
              <div className="Calendar-repitedTasksBtn">{repitedTasksBtn}</div>
            </div>
          </div>
        )}
        renderHeader={({ date, onPrevMonth, onNextMonth }) => (
          <div className="Calendar-header">
            <button onClick={onPrevMonth}>
              <Icon className="Calendar-icon" icon="Back" />
            </button>
            <div className="Calendar-header-currentDate">{date.format('MMMM YYYY')}</div>
            <button onClick={onNextMonth}>
              <Icon className="Calendar-icon" icon="Next" />
            </button>
          </div>
        )}
      />
    );
  }
}

export default TaskCalendar;
