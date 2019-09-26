import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../redux/actions/tasksActions';
import { getToken } from '../../redux/selectors/selectors';
import styles from './PopUpConfirmDelete.module.css';

const { container, title, btnsContainer, button, btnDelete, btnCancel } = styles;

const btnDeleteStyle = [button, btnDelete];
const btnCancelStyle = [button, btnCancel];

class PopUpConfirmDelete extends Component {
  state = {};

  render() {
    const { onDeleteTask, token, _id } = this.props;

    return (
      <div className={container}>
        <h1 className={title}>Подтвердите удаление задачи</h1>
        <div className={btnsContainer}>
          <button className={btnDeleteStyle.join(' ')} onClick={() => onDeleteTask(_id, token)}>
            Удалить
          </button>
          <button className={btnCancelStyle.join(' ')}>Отмена</button>
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  token: getToken(state)
});

const mDTP = dispatch => ({
  onDeleteTask: (id, token) => dispatch(deleteTask({ id, token }))
});

export default connect(
  mSTP,
  mDTP
)(PopUpConfirmDelete);
