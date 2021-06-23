import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
	count: "Hello",
};

function fetchToken() {
	const url = new URLSearchParams(window.location.href).toString();
	const firstChar = url.indexOf("=");
	const secondChar = url.indexOf("&");
	return url.substring(firstChar, secondChar).slice(1);
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "empty":
			return ("Yay");
		case "update":
			return (state.count = fetchToken());
		default:
			return state;
	}
};

export const store = createStore(reducer);



ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
