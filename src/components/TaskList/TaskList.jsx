import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from '../../redux/selectors/selectors';

import Task from '../../components/Task/Task.jsx';

import styles from './TaskList.module.css';

// import tasks from '../../../src/assets/tasksForTest.json';
import datesFromTasks from '../../utils/utils';
import tasks from '../../assets/tasksForTest.json';
// console.log(tasks.tasks);
// import datesFromTasks from '../../../src/utils/utils.js'
datesFromTasks(tasks.tasks);

const TaskList = ({ tasks }) => {
  return ((tasks && tasks.length) ? (<ul className={styles.list}>
      {tasks &&
        tasks.map(task => {
          return (
            <li key={task._id}>
              <Task task={task} taskId={task.id} />
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
  tasks: getTasks(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
