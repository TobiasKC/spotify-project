import DashboardHeader from "./dashboardHeader";
import DashboardAlbum from "./dashboardAlbum";
import { useSelector, useDispatch } from "react-redux";

const DashboardComponent = () => {
	//Define function

	const authToken = useSelector((state) => state.count);
	const dispatch = useDispatch();

	// function fetchToken() {
	// 	const url = new URLSearchParams(window.location.href).toString();
	// 	const firstChar = url.indexOf("=");
	// 	const secondChar = url.indexOf("&");
	// 	return url.substring(firstChar, secondChar).slice(1);
	// }

	return (
		<>
			<DashboardHeader />
			<DashboardAlbum
				albumCover={
					"https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg"
				}
			/>
			<p>{authToken}</p>
			<button>
				{() => dispatch({ type: "empty" })}Test
			</button>
		</>
	);
};
export default DashboardComponent;
