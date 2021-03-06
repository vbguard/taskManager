import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../redux/actions/formAction';
import style from './AddTask.module.css';
import Icon from '../Icon/Icon';
import { warn } from '../../utils/notification';
import { convertDateFromRFC2822 } from '../../utils/utils';
import DatePicker from '../DatePicker/DatePicker';
import Modal from '../Modal/Modal';
import { openPickerModal } from '../../redux/actions/modalAction.js';

class AddForm extends Component {
  state = {
    title: '',
    description: '',
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
    const { openModal, modal } = this.props;

    if (modal) {
      const convertedDates = dates.map(date => ({ date }));
      this.setState(state => ({
        dates: convertedDates
      }));
    }
    if (!modal) {
      openModal();
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, description, dates } = this.state;

    if (title === '' || description === '' || dates.length === 0) {
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

  handleDates = () => {
    const { dates } = this.state;
    if (dates.length === 0) {
      return dates;
    } else {
      return dates.map(el => el.date);
    }
  };

  handleReset = () => {
    this.props.history.push('/dashboard');
    this.setState({ title: '', description: '' });
  };

  render() {
    const { title, description, dates } = this.state;
    const { modal } = this.props;

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
            maxLength="50"
          ></input>
          {title.length >= 50 && <span className={style.errorSpan}>Описание не должно быть больше 50-ти символов</span>}
          <span className={style.dataPickerContainer} onClick={this.handleOpenDatePicker}>
            <div>
              <Icon icon="Calendar" className={style.formIcon} />
            </div>
            {dates.length > 0 ? (
              <p className={style.dataPickerTitle}>{dates.map(el => `${convertDateFromRFC2822(el.date)}; `)}</p>
            ) : (
              <p className={style.dataPickerTitle}>Выберите дату</p>
            )}
            <div>
              <Icon icon="ArrowRight" className={style.formIcon} />
            </div>
          </span>
          {modal && (
            <Modal>
              <DatePicker modal={modal} handleOpenDatePicker={this.handleOpenDatePicker} dates={this.handleDates()} />
            </Modal>
          )}

          <p className={style.labelDescription}>Краткое описание:</p>
          <textarea
            name="description"
            wrap="virtual"
            className={style.textArea}
            onChange={this.handleChange}
            value={description}
            placeholder="Введите описание задачи"
            maxLength="200"
          ></textarea>
          {description.length >= 200 && (
            <span className={style.errorSpan}>Описание не должно быть больше 200-ти символов</span>
          )}
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

const mapStateToProps = state => ({ error: state.form.error, modal: state.modal.modalPicker });
const mapDispatchToProps = dispatch => ({
  addForm: data => dispatch(addTask(data)),
  openModal: () => {
    dispatch(openPickerModal());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);
