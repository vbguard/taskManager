import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../../components/Task/Task.jsx';

export default class TaskList extends Component {
    render() {
        const tasks = this.props.tasks;
        return (
            <div>
                {tasks.map((task) => {
                   return <Task task={task}/>
                }
                )}
            </div>
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