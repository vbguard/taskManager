import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from '../../redux/selectors/selectors';

import Task from '../../components/Task/Task.jsx';

import styles from './TaskList.module.css';


const TaskList = ({ tasks }) => {
  return ((tasks && tasks.length) ? (<ul className={styles.list}>
      {tasks &&
        tasks.map(task => {
          return (
            <li key={task._id}>
              <Task task={task} />
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
