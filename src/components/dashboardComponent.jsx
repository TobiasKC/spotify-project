import DashboardHeader from "./dashboardHeader";
import DashboardAlbum from "./dashboardAlbum";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const DashboardComponent = () => {
	// Connect to the store. Only accessing authToken currently
	// authToken is ref used to query state.authToken
	const authToken = useSelector((state) => state.authToken);
	//Enable dispatch
	const dispatch = useDispatch();
	// Grab authToken from URL and return
	function fetchToken() {
		const url = new URLSearchParams(window.location.href).toString();
		const firstChar = url.indexOf("=");
		const secondChar = url.indexOf("&");
		return url.substring(firstChar, secondChar).slice(1);
	}
// On Component mount, set value of authToken in state to result of fetchToken + Query Api
	useEffect(() => {
		dispatch({ type: "UPDATE_AUTH_TOKEN", value: fetchToken() });
		axios
			.get("https://api.spotify.com/v1/search?q=happy&type=track", {
				headers: { Authorization: `Bearer ${authToken}` },
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<DashboardHeader />
			<DashboardAlbum
				albumCover={
					"https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg"
				}
			/>
			<p>{authToken}</p>
			{/* Dispatch value to store */}
			{/* <button
				onClick={() => dispatch({ type: "UPDATE_AUTH_TOKEN", value: "Yay" })}>
				Test
			</button> */}
		</>
	);
};
export default DashboardComponent;
