import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './TaskList.module.css';

import Task from '../../components/Task/Task.jsx';


export default class TaskList extends Component {
    render() {
        const tasks = this.props.tasks;
        return (
            <ul>
                {tasks.map((task) => {
                   return <li key={task.id}><Task task={task}/></li>
                }
                )}
            </ul>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            taskNumber: PropTypes.number.isRequired,
            taskHeader: PropTypes.string.isRequired,
            taskDescription: PropTypes.string.isRequired,
            isLoop: PropTypes.bool.isRequired,
            loopDates:PropTypes.arrayOf(PropTypes.number).isRequired,
            isComplete: PropTypes.bool.isRequired,
            onEdit: PropTypes.func.isRequired,
            onCompltete: PropTypes.func.isRequired,}))
}