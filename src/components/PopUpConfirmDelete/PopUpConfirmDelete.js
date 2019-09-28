import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../redux/actions/tasksActions';
import { closeModal, closeDeleteModal } from '../../redux/actions/modalAction';
import { getToken } from '../../redux/selectors/selectors';
import styles from './PopUpConfirmDelete.module.css';

const { container, title, btnsContainer, button, btnDelete, btnCancel } = styles;

const btnDeleteStyle = [button, btnDelete];
const btnCancelStyle = [button, btnCancel];

class PopUpConfirmDelete extends Component {
  state = {};

  handleDelete = (id, token) => {
    this.props.onDeleteTask(id, token);
    this.props.cancelDelete();
    this.props.history.push('/dashboard');
  };

  render() {
    const { token, _id, cancelDelete } = this.props;

    return (
      <div className={container}>
        <h1 className={title}>Подтвердите удаление задачи</h1>
        <div className={btnsContainer}>
          <button className={btnDeleteStyle.join(' ')} onClick={() => this.handleDelete(_id, token)}>
            Удалить
          </button>
          <button className={btnCancelStyle.join(' ')} onClick={cancelDelete}>
            Отмена
          </button>
        </div>
      </div>
    );
  }
}

const mSTP = state => ({
  token: getToken(state)
});

const mDTP = dispatch => ({
  onDeleteTask: (id, token) => dispatch(deleteTask({ id, token })),
  cancelDelete: () => {
    dispatch(closeModal());
    dispatch(closeDeleteModal());
  }
});

export default connect(
  mSTP,
  mDTP
)(PopUpConfirmDelete);
