import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './EditTask.module.css';
import Icon from '../Icon/Icon';
import { getTasks } from '../../redux/selectors/selectors';
import { editTask } from '../../redux/actions/tasksActions';
import { warn } from '../../utils/notification';
import { openModal, openDeleteModal } from '../../redux/actions/modalAction';

class EditTask extends Component {
  state = {
    title: '',
    description: '',
    dates: [{ date: '09-26-2019' }]
  };

  componentDidMount() {
    const { id, tasks } = this.props;
    const newState = tasks.find(el => el._id === id);
    this.setState({ ...newState });
  }

  handleChange = event => {
    const { title, description } = this.state;
    if (title.length > 50 || description.length > 200) {
      return;
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, description, dates } = this.state;
    const { token, id, tasks } = this.props;
    const editTask = tasks.find(el => el._id === id);

    if (title === '' || description === '') {
      warn('Все поля должны быть заполнены');
      return;
    }

    if (
      !this.props.error ||
      title !== editTask.title ||
      description !== editTask.description ||
      dates.length !== editTask.dates.length
    ) {
      this.props.editTask({ title, description, dates }, token, id);
      this.props.history.push('/dashboard');
      this.setState({ title: '', description: '' });
    }
    if (
      this.props.error ||
      title === editTask.title ||
      description === editTask.description ||
      dates.length === editTask.dates.length
    ) {
      this.setState({ error: this.props.error });
    }
  };

  handleReset = () => {
    this.props.history.push('/dashboard');
    this.setState({ title: '', description: '' });
  };

  render() {
    const { title, description } = this.state;
    const { confirmDelete } = this.props;
    return (
      <div className={style.bodybg}>
        <form onSubmit={this.handleSubmit} className={style.formBg}>
          <input
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
            placeholder="#1 Введите название задачи"
            className={style.title}
          ></input>
          {title.length > 50 && <span className={style.errorSpan}>Описание не должно быть больше 50-ти символов</span>}
          <div className={style.dataPickerContainer}>
            <Icon icon="Calendar" className={style.formIcon} />
            <p className={style.dataPickerTitle}>Выберете дату</p>
            <Icon icon="ArrowRight" className={style.formIcon} />
          </div>
          <label htmlFor="description" className={style.labelDescription}>
            Краткое описание:
          </label>
          <textarea
            name="description"
            wrap="virtual"
            className={style.textArea}
            onChange={this.handleChange}
            value={description}
            placeholder="Введите описание задачи"
          ></textarea>
          {description.length > 200 && <span>Описание не должно быть больше 200-ти символов</span>}
          <button type="button" className={style.deleteBtn}>
            <Icon icon="Delete" className={style.formIconDelete} onClick={confirmDelete} />
          </button>
          <button type="submit" className={style.saveBtn}>
            Сохранить
          </button>
          <button type="reset" className={style.resetBtn} onClick={this.handleReset}>
            Отмена
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  id: state.id,
  error: state.form.error,
  tasks: getTasks(state),
  token: state.session.token
});

const mapDispatchToProps = dispatch => ({
  editTask: (data, token, id) => dispatch(editTask({ data, token, id })),
  confirmDelete: () => {
    dispatch(openModal());
    dispatch(openDeleteModal());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTask);
