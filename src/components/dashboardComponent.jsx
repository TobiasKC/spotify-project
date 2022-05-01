import DashboardHeader from "./dashboardHeader";
import Player from "./player.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const DashboardComponent = () => {
	const dispatch = useDispatch();

	// Grab access token
	useEffect(() => {
		dispatch({ type: "UPDATE_AUTH_TOKEN", value: fetchToken() });
	}, []);

	//Store selectors
	const authToken = useSelector((state) => state.authToken);
	const searchTermState = useSelector((state) => state.searchTerm);

	//Grab auth token from redirected URL
	function fetchToken() {
		const url = new URLSearchParams(window.location.href).toString();
		const firstChar = url.indexOf("=");
		const secondChar = url.indexOf("&");
		return url.substring(firstChar, secondChar).slice(1);
	}

	//When search term changes, update state with API results (after 300ms)
	useEffect(() => {
		//Set timeout
		const timeout = setTimeout(() => {
			//Defensive check - check state = active and authToken present
			if (!authToken || !searchTermState) {
				console.log("Token or State not found", authToken, searchTermState);
				return;
			}

			axios
				.get("http://localhost:5500/search/results", {
					headers: { token: `${authToken}` },
				})
				.then((res) => {
					//Update store with query results
					dispatch({
						type: "UPDATE_SEARCH_RESULTS",
						value: res.data.map((track) => {
							return {
								artist: track.artists[0].name,
								id: track.uri,
								title: track.name,
								albumUrl: track.album.images[2].url,
							};
						}),
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}, 300);
		return () => clearTimeout(timeout);
	}, [searchTermState]);

	return (
		<div
			onClick={(e) => {
				//Clear search term state if clicking outside when active
				//Changes display : none
				if (e.target.id !== "TrackSearchResults") {
					dispatch({ type: "UPDATE_SEARCH_TERM", value: "" });
				}
			}}>
			<DashboardHeader />
			<Player />
		</div>
	);
};
export default DashboardComponent;
