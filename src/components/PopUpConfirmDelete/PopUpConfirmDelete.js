import React, { Component } from 'react';
import styles from './PopUpConfirmDelete.module.css';
import { connect } from 'react-redux';
import { deleteTask } from '../../redux/actions/tasksActions';
import { getToken } from '../../redux/selectors/selectors';

const { container, title, btnsContainer, button, btnDelete, btnCancel } = styles;

const btnDeleteStyle = [button, btnDelete];
const btnCancelStyle = [button, btnCancel];

class PopUpConfirmDelete extends Component {
  state = {};

  render() {
    const { onDeleteTask, token, id } = this.props;

    return (
      <div className={container}>
        <h1 className={title}>Подтвердите удаление задачи</h1>
        <div className={btnsContainer}>
          <button className={btnDeleteStyle.join(' ')} onClick={() => onDeleteTask(id, token)}>
            Удалить
          </button>
          <button className={btnCancelStyle.join(' ')}>Отмена</button>
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  token: getToken(state),
  id: '5d8c0c2ab3d71a949f3d91ba'
});

const mDTP = dispatch => ({
  onDeleteTask: (id, token) => dispatch(deleteTask({ id, token }))
});

export default connect(
  mSTP,
  mDTP
)(PopUpConfirmDelete);
