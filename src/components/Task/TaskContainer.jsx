import React from 'react';
import s from "./TaskContainer.module.css";

const TaskContainer = (props) => (
  <div className={s.taskContainer}>
    {props.children}
  </div>
);

export default TaskContainer;
