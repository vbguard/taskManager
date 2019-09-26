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
    </ul>): <p className={styles.intro}>Нет запланированных задач... Время приступить к управлению своей жизнью!</p>
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
