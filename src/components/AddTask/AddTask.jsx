import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/formAction';
import style from './AddTask.module.css';
import Icon from '../Icon/Icon';
import { warn } from '../../utils/notification';
import DatePicker from '../DatePicker/DatePicker';

class AddForm extends Component {
  state = {
    title: '',
    description: '',
    isToggleOn: false,
    // dates: [{ date: '09-26-2019' }]
    dates: []
  };

  handleChange = event => {
    const { title, description } = this.state;
    if (title.length > 50 || description.length > 200) {
      return;
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  handleOpenDatePicker = dates => {
    const { isToggleOn } = this.state;
    if (isToggleOn) {
      const convertedDates = dates.map(date => ({ date }));
      //make dates  "dates: [{ date: '09-26-2019' }]" from array of dates
      console.log(convertedDates);
      this.setState(state => ({
        isToggleOn: !state.isToggleOn,
        dates: convertedDates
      }));
    }
    if (!isToggleOn) {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  };

  handleDates = () => {
    const { dates } = this.state;
    if (dates.length === 0) {
      return dates;
    } else {
      return dates.map(el => el.date);
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, description, dates } = this.state;

    if (title === '' || description === '') {
      warn('Все поля должны быть заполнены');
      return;
    }

    if (!this.props.error) {
      this.props.addForm({ title, description, dates });
      this.props.history.push('/dashboard');
      this.setState({ title: '', description: '' });
    }
    if (this.props.error) {
      this.setState({ error: this.props.error });
    }
  };

  handleReset = () => {
    this.props.history.push('/dashboard');
    this.setState({ title: '', description: '' });
  };

  render() {
    const { title, description, isToggleOn } = this.state;

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
          <div className={style.dataPickerContainer} onClick={this.handleOpenDatePicker}>
            <Icon icon="Calendar" className={style.formIcon} />
            <p className={style.dataPickerTitle}>Выберете дату</p>
            <Icon icon="ArrowRight" className={style.formIcon} />
          </div>
          {this.state.isToggleOn ? (
            <DatePicker
              isToggleOn={isToggleOn}
              handleOpenDatePicker={this.handleOpenDatePicker}
              dates={this.handleDates()}
            />
          ) : (
            ''
          )}
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
          <div className={style.battonContainer}>
          <button type="submit" className={style.saveBtn}>
            Сохранить
          </button>
          <button type="reset" className={style.resetBtn} onClick={this.handleReset}>
            Отмена
          </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ error: state.form.error });
const mapDispatchToProps = dispatch => ({
  addForm: data => dispatch(addTask(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);
