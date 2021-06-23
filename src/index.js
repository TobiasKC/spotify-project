import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

const clientID = "07310eeebf82492b914f9156e15dceef";
const redirectURL = "http://localhost:3000/dashboard";
const scope =
	"streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const initialState = {
	authToken: "",
	authURL : `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope}`
};
// Is data accessed by any other component?
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "UPDATE_AUTH_TOKEN":
			return {authToken : action.value};
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
