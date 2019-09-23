import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../../redux/actions/authOperations";
import styles from "./AuthForm.module.css";
import { ToastContainer } from "react-toastify";
import * as notify from "../Notification/Notification";

const INITIAL_STATE = {
	nickname: "",
	password: ""
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
			notify.error("The nickname should be between 5 and 15 symbols");
			return;
		}

		if (password.length < 5 || password.length > 12) {
			notify.error("The password should be between 5 and 12 symbols");
			return;
		}

		this.props.onSubmit({ ...this.state });

		this.setState({ ...INITIAL_STATE });
	};

	render() {
		const { nickname, password } = this.state;

		return (
			<div className={styles.wrapper}>
				<ToastContainer />;
				<form
					className={styles.registrationForm}
					onSubmit={this.handleSubmit}
				>
					<h2 className={styles.title}>
						Введите данные для регистрации или логинизации
					</h2>

					<label className={styles.label}>
						<span className={styles.labelText}>
							Уникальный ник:
						</span>
						<input
							className={styles.input}
							value={nickname}
							name="nickname"
							onChange={this.handleChange}
						></input>
					</label>

					<label className={styles.label}>
						<span className={styles.labelText}> Пароль: </span>
						<input
							className={styles.input}
							type="password"
							autoComplete="current-password"
							size="12"
							onChange={this.handleChange}
							value={password}
							name="password"
							id=""
						></input>
					</label>

					<button className={styles.button} type="submit">
						<span className={styles.buttonText}> Вперед! </span>
					</button>
				</form>
			</div>
		);
	}
}

AuthForm.propTypes = {
	nickname: PropTypes.string,
	password: PropTypes.string,
	onSubmit: PropTypes.func,
	handleChange: PropTypes.func
};

AuthForm.defaulProps = {
	nickname: "",
	password: "",
	onSubmit: () => {},
	handleChange: () => {}
};

const mapDispatchToProps = {
	onSubmit: auth
};

export default connect(
	null,
	mapDispatchToProps
)(AuthForm);
