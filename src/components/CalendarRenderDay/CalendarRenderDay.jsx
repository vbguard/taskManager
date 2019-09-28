import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import { connect } from 'react-redux';
import { getCalendar } from './calendarSelectors';
import 'moment/locale/uk';

const CalendarRenderDay = ({ day, classNames, onPickDate, calendar }) => {
  const addTask = day => {
    if (calendar) {
      const calendarDay = calendar.find(el => el._id === day.format('YYYY-MM-DD'));

      if (!!calendarDay) {
        return (
          <div className="Calendar-tasksWrapper">
            {calendarDay.oneTasks.count !== 0 && (
              <span className="Calendar-oneDayTaskBtn">{calendarDay.oneTasks.count}</span>
            )}
            {calendarDay.repeatTasks.count !== 0 && (
              <span className="Calendar-repitedTasksBtn">{calendarDay.repeatTasks.count}</span>
            )}
          </div>
        );
      }
    }
    return null;
  };
  return (
    <div
      key={day.format()}
      className={cx('Calendar-grid-item', day.isSame(moment(), 'day') && 'Calendar-grid-item--current', classNames)}
      onClick={e => onPickDate(day)}
    >
      {day.format('D')}
      {addTask(day)}
    </div>
  );
};

const mapStateToProps = state => ({
  calendar: getCalendar(state)
});

export default connect(mapStateToProps)(CalendarRenderDay);
