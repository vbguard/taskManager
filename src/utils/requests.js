import axios from "axios";
import * as api from "./entyPoints";

const axiosRequest = axios.create({
	baseURL: "https://task-manager.goit.co.ua/api/"
});

axiosRequest.defaults.headers.post["Content-Type"] = "application/json";
axiosRequest.defaults.headers.get["Content-Type"] = "application/json";
axiosRequest.defaults.headers.put["Content-Type"] = "application/json";

const setToken = token => ({
	headers: {
		Authorization: `Bearer ${token}`
	}
});

export const setAuthToken = token => {
	axiosRequest.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
	axiosRequest.defaults.headers.common["Authorization"] = null;
};

export const requestUserLogin = async credentials => {
	const res = await axiosRequest.post(api.url.loginUser(), credentials);
	return res;
};

export const fetchPosts = async token => {
	const res = await axiosRequest.get(api.url.getTasks(), setToken(token));
	return res;
};

export const requestGetUserTasks = credendials => dispatch => {
  dispatch(authRequest());

  const res = axios.post(api.url.getUserTasks(), setToken(credendials.token));
  return res;
};
