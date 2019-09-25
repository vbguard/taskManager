import axios from "axios";
import { requestUserLogin } from "../../utils/requests";
import {
	authRequest,
	loginSuccess,
	loginError,
	logoutSuccess
} from "./authActions";
import { setAuthToken, clearAuthToken } from "../../utils/requests";
import * as notify from "../../utils/notification";

export const auth = credentials => dispatch => {
	dispatch(authRequest());

	requestUserLogin(credentials)
		.then(({ data }) => {
			setAuthToken(data.token);
			dispatch(loginSuccess(data));
		})
		.catch(err => {
			notify.error("Wrong username or password");
			dispatch(loginError(err));
		});
};

export const logout = () => dispatch => {
	axios
		.post("https://task-manager.goit.co.ua/api/auth")
		.then(() => {
			clearAuthToken();
			dispatch(logoutSuccess());
		})
		.catch(err => console.log(err));
};
