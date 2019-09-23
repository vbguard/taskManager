import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./utils/serviceWorker";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./stylesheet/main.css";

const render = Component => {
	return ReactDOM.render(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Component />
				</BrowserRouter>
			</PersistGate>
		</Provider>,
		document.getElementById("root")
	);
};

render(App);

if (module.hot) {
	module.hot.accept("./App", () => {
		const NextApp = require("./App").default;
		render(NextApp);
	});
}

serviceWorker.unregister();
