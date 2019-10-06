import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from '../../redux/selectors/selectors';

import Task from '../../components/Task/Task.jsx';

import styles from './TaskList.module.css';

import refactoredTaskList from '../../utils/refactoredTaskList';

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

const sortedByCompleted = (tasks, date) =>{
  // console.log('tasks=', tasks);
  // console.log('typeof tasks=', typeof tasks);
  date = new Date(date).toISOString();
  // console.log('date=', date);
  // console.log('typeof date=', typeof date);
  const result ={};

  result.completedTasks = [];
  result.unCompletedTasks = tasks;
  
  tasks.map(task =>{
    // console.log('task.dates=', task.dates);
    // console.log('typeof task.dates=', typeof task.dates);
    task.dates.map(taskDate =>{
      // console.log('taskDate=', taskDate);
      // console.log('typeof taskDate=', typeof taskDate);
      // console.log('taskDate.date=', taskDate.date);
      // console.log('taskDate.taskDate===date=', taskDate.date===date);
      // console.log('taskDate.isComplete=', taskDate.isComplete);
      if (taskDate.date===date && taskDate.isComplete) {result.completedTasks.push(task); result.unCompletedTasks=result.unCompletedTasks.filter(item => item._id!==task._id)};
    })

  // console.log('completedTasks=', result.completedTasks);
  // console.log('unCompletedTasks=', result.unCompletedTasks);
  })
  // console.log('result=', result);
  return result;

}

const TaskList = ({ tasks }) => {
  return tasks && tasks.length ? (
    <ul className={styles.list}>
      {tasks &&
        tasks.map(taska => {
          return (
            <li key={taska.date + Math.random()}>
              <p className={styles.today}>{ifToday(taska.date)}</p>
              <ul className={styles.subList} key={Math.random()}>
              {/* <p className={styles.today}>Выполненные задачи</p>   */}
              {sortedByCompleted(taska.tasks, taska.date) && (
                sortedByCompleted(taska.tasks, taska.date).unCompletedTasks.map((task, index) => {
                  return (
                    
                      <li className={styles.subListItem} key={task._id + Math.random()}>
                        <Task task={task} taskNumber={index + 1} date={taska.date} />
                      </li>
                    
                  );
                }))}
              {sortedByCompleted(taska.tasks, taska.date).completedTasks.length>0 &&(
                <li><p className={styles.today}>Выполненные задачи</p>
                {sortedByCompleted(taska.tasks, taska.date).completedTasks.map((task, index) => {
                  return (
                    
                      <li className={styles.subListItem} key={task._id + Math.random()}>
                        <Task task={task} taskNumber={index + 1} date={taska.date} />
                      </li>
                    
                  );
                })}
                </li>
                
              )}
                </ul>
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
