import "../src/styles/main.scss";
import { BrowserRouter, Route } from "react-router-dom";
import GetStarted from "./components/getStarted";
import DashboardComponent from "./components/dashboardComponent";

function App() {
	return (
		<>
			<BrowserRouter>
				{/* <GetStarted/> */}
				{/* <LogIn/> */}
				<Route exact path='/' component={GetStarted} />
				<Route path='/dashboard' component={DashboardComponent} />
			</BrowserRouter>
		</>
	);
}

export default App;
//https://developer.spotify.com/documentation/general/design-and-branding/
//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
// https://www.onlinepalette.com/spotify/
// https://www.w3schools.com/cssref/css_default_values.asp

//Ideas:
// In search terms, spaces should be replaced by '%20' or '+'
