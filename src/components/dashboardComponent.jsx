import Player from "./player.jsx";
import SearchBar from "./searchBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../constants.js";
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
		return url.substring(url.indexOf("="), url.indexOf("&")).slice(1);
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
			console.log(
				`${BASE_API_URL}search/results/?searchTerm=${searchTermState}`
			);
			axios
				.get(`${BASE_API_URL}search/results/?searchTerm=${searchTermState}`, {
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
		<>
			<SearchBar />
			<Player />
		</>
	);
};
export default DashboardComponent;
