import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/formAction';
import style from './AddForm.module.css';
import Icon from '../Icon/Icon';
import { warn } from '../../utils/notification';

class AddForm extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = event => {
    const { title, description } = this.state;
    if (title.length > 50 || description.length > 200) {
      return;
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;
    if (title === '' || description === '') {
      warn('Все поля должны быть заполнены');
      return;
    }
    if (!this.props.error) {
      this.props.history.push('/dashboard');
      this.props.addForm(this.state);
    }

    this.setState({ title: '', description: '' });
  };

  handleReset = () => {
    if (this.props.error) {
      this.props.history.push('/dashboard');
      this.setState({ title: '', description: '' });
    }
  };

  render() {
    const { title, description } = this.state;
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
          {title.length > 50 && (
            <span className={style.errorSpan}>
              Описание не должно быть больше 50-ти символов
            </span>
          )}
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
          {description.length > 200 && (
            <span>Описание не должно быть больше 200-ти символов</span>
          )}
          <button type="button" className={style.deleteBtn}>
            <Icon icon="Delete" className={style.formIconDelete} />
          </button>
          <button type="submit" className={style.saveBtn}>
            Сохранить
          </button>
          <button
            type="reset"
            className={style.resetBtn}
            onClick={this.handleReset}
          >
            Отмена
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ error: state.form.error });
const mapDispatchToProps = dispatch => ({
  addForm: ({ title, description }) =>
    dispatch(
      addTask({ title, description, dates: ['2019-09-23T17:23:32.477Z'] })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);
