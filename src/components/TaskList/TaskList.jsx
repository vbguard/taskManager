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
const ifToday = (number) =>{
  const now = new Date();
  const date = new Date(number);
  // console.log(date);
  if (date.getFullYear()===now.getFullYear() && date.getMonth()===now.getMonth() && date.getDate()===now.getDate()) {return 'Сегодня'} else {
    return date.toLocaleDateString()
  }
}

const TaskList = ({ tasks }) => {
  // console.log('tasks in task list props=', tasks);
  // console.log('props=', props);
  return ((tasks && tasks.length) ? (<ul className={styles.list}>
    <li key={new Date().toLocaleDateString()}>{new Date().toLocaleDateString()}</li>
      {tasks &&
        tasks.map(task => {
          // console.log('task=', task);
          // console.log('task.tasks=', task.tasks);
          // console.log('task.tasks.length=', task.tasks.length);
          // console.log('typeof task.tasks.length=', typeof task.tasks.length);
          return (
            <li key={task.date+Math.random()}>
              <p>{
                ifToday(task.date)
              }</p>
              {task.tasks && task.tasks.map(task =>{
                // console.log('task=', task);
                return(
                  <ul key={Math.random()}>
                    <li key={task._id+Math.random()}>
                      <Task task={task}/>
                    </li>
                  </ul>
                  
                );
              })}
            </li>
          );
        })}
    </ul>): (<div>
        <p className={styles.intro}>Нет запланированных задач...</p>
        <p className={styles.intro}>Время начать управлять своей жизнью!</p>
      </div>)
  );
  };

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(Object)
};

const mapStateToProps = state => ({
  // tasks: getTasks(state)
  // tasks: refactoredTaskList(getTasks(state))
  tasks: refactoredTaskList(tasks)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
