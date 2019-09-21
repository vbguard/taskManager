import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArrowRight, Delete, Calendar } from '../../assets/icons/index';
import { formSuccess } from '../../redux/actions/formAction';
import style from './AddForm.module.css';

class AddForm extends Component {
  state = {
    title: '',
    description: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;
    if (title === '' || description === '') {
      alert('Все поля должны быть заполнены');
      return;
    }
    this.props.addForm({ ...this.state });
    this.setState({ title: '', description: '' });
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
          {title.length > 50 && <span className={style.errorSpan}>Описание не должно быть больше 50-ти символов</span>}

          <div className={style.linkContainer}>
            <a href="true" className={style.linkStyle}>
              <Calendar className={style.formIcon} />
              Выберете дату
              <ArrowRight className={style.formIcon} />
            </a>
          </div>
          <label htmlFor="description" className={style.labelDescription}>
            Краткое описание:
          </label>
          <input
            name="description"
            type="textarea"
            className={style.textArea}
            onChange={this.handleChange}
            value={description}
            placeholder="Введите описание задачи"
          ></input>
          {description.length > 200 && <span>Описание не должно быть больше 200-ти символов</span>}
          <button type="button" className={style.deleteBtn}>
            <Delete className={style.formIconDelete} />
          </button>
          <button type="submit" className={style.saveBtn}>
            Сохранить
          </button>
          <button type="reset" className={style.resetBtn}>
            Отмена
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addForm: ({ title, description }) => dispatch(formSuccess(title, description))
});
export default connect(
  null,
  mapDispatchToProps
)(AddForm);
