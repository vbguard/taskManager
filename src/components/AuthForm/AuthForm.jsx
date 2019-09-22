import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../redux/actions/authOperations';
// import { getError } from './authSelector';

const INITIAL_STATE = {
  nickname: '',
  password: ''
};

class AuthForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { nickname, password } = this.state;

    if (nickname.length < 5 || nickname.length > 15) {
      alert('The nickname should be between 5 and 15 symbols');
      return;
    }

    if (password.length < 5 || password.length > 12) {
      alert('The password should be between 5 and 12 symbols');
      return;
    }

    this.props.onSubmit({ ...this.state });

    // TODO: show message if the password is wrong

    // if (this.props.error) {
    //   alert('Wrong password');
    //   this.setState({ password: '' });
    //   this.props.error = null;
    //   return;
    // }

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { nickname, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Уникальный ник:
          <input value={nickname} name="nickname" onChange={this.handleChange} required></input>
        </label>

        <label>
          Пароль:
          <input type="password" onChange={this.handleChange} value={password} name="password" required id=""></input>
        </label>
        <button type="submit">Вперед!</button>
      </form>
    );
  }
}
// const mapStateToProps = state => ({
//   error: getError(state)
// });

const mapDispatchToProps = {
  onSubmit: auth
};

export default connect(
  null,
  mapDispatchToProps
)(AuthForm);
