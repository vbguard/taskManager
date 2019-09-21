import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ArrowRight, Delete } from '../../assets/icons/index';
import { formSuccess } from '../../redux/actions/formAction';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
            placeholder="#1 Введите название задачи"
            maxLength="50"
          ></input>
          {title.length > 50 && <span>Описание не должно быть больше 50-ти символов</span>}

          <div>
            <a href="true">
              Выберете дату
              <ArrowRight />
            </a>
          </div>
          <label htmlFor="description">Краткое описание:</label>
          <input name="description" type="textarea" onChange={this.handleChange} value={description}></input>
          {description.length > 200 && <span>Описание не должно быть больше 200-ти символов</span>}
          <button type="button">
            <Delete />
          </button>
          <button type="submit"> Сохранить</button>
          <button type="reset">Отмена</button>
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
