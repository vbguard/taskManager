import React from 'react';
import { Link } from 'react-router-dom'
import windowSize from 'react-window-size';
import AddButton from '../AddButton/AddButon';
import TaskList from '../TaskList/TaskList';
import Icon from '../Icon/Icon';
import s from './TaskContainer.module.css';

const TaskContainer = props => {
  
  return (
  <div className={s.taskContainer}>
    <TaskList />
    <AddButton />
    {767 < props.windowWidth < 1024 ? (
      <div className={s.iconsContainer}>
        <Link to='/dashboard/calendar' className={s.calendarBtnIcon}>
          <Icon icon="Calendar" className={s.btnCalendarIcon} />
        </Link>
      </div>
    ) : ''}
  </div>
)};

export default windowSize(TaskContainer);
