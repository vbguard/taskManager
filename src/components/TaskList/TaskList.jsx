import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from '../../redux/selectors/selectors';

import Task from '../../components/Task/Task.jsx';

import styles from './TaskList.module.css';

// import tasks from '../../../src/assets/tasksForTest.json';
// import datesFromTasks from '../../utils/utils';
// import tasks from '../../assets/tasksForTest.json';
// console.log(tasks.tasks);
// import datesFromTasks from '../../../src/utils/utils.js'
// import datesFromTasks from '../../utils/utils';
import refactoredTaskList from '../../utils/refactoredTaskList';
import stateForTest from '../../assets/stateForTest.js';
const tasks = stateForTest.userTasks.tasks;
// console.log('stateForTest.userTasks.tasks=', stateForTest.userTasks.tasks);
refactoredTaskList(tasks);
const ifToday = number => {
  const now = new Date();
  const date = new Date(number);
  // console.log(date);
  if (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  ) {
    return 'Сегодня';
  } else {
    return date.toLocaleDateString();
  }
};

const TaskList = ({ tasks }) => {
  return tasks && tasks.length ? (
    <ul className={styles.list}>
      {tasks &&
        tasks.map(taska => {
          return (
            <li key={taska.date + Math.random()}>
              <p className={styles.today}>{ifToday(taska.date)}</p>
              {taska.tasks &&
                taska.tasks.map((task, index) => {
                  return (
                    <ul className={styles.subList} key={Math.random()}>
                      <li className={styles.subListItem} key={task._id + Math.random()}>
                        <Task task={task} taskNumber={index + 1} date={taska.date} />
                      </li>
                    </ul>
                  );
                })}
            </li>
          );
        })}
    </ul>
  ) : (
    <div className={styles.emptyTaskMessage}>
      <p className={styles.intro}>Нет запланированных задач.</p>
      <p className={styles.intro}>Время начать управлять своей жизнью!</p>
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(Object)
};

const mapStateToProps = state => ({
  // tasks: getTasks(state)
  // tasks: refactoredTaskList(getTasks(state))
  // tasks: refactoredTaskList(tasks),
  tasks: refactoredTaskList(getTasks(state, state.userTasks.search))
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
