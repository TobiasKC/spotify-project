import DashboardHeader from "./dashboardHeader";
import DashboardAlbum from "./dashboardAlbum";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const DashboardComponent = () => {
	// On Component mount, set value of authToken in state to result of fetchToken. Before useSelector() exectues.

	useEffect(() => {
		dispatch({ type: "UPDATE_AUTH_TOKEN", value: fetchToken() });
	}, []);

	const authToken = useSelector((state) => state.authToken);
	const searchResults = useSelector((state) => state.searchResults);

	//Swap out for Regex eventually
	function fetchToken() {
		const url = new URLSearchParams(window.location.href).toString();
		const firstChar = url.indexOf("=");
		const secondChar = url.indexOf("&");
		return url.substring(firstChar, secondChar).slice(1);
	}

	const searchTermState = useSelector((state) => state.searchTerm);

	//Enable dispatch
	const dispatch = useDispatch();

	const searchType = "track";
	

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!authToken || !searchTermState) {
				console.log("Token or State not found", authToken, searchTermState);
				return;
			}

			axios
				.get(
					`https://api.spotify.com/v1/search?q=${searchTermState}&type=${searchType}`,
					{
						headers: { Authorization: `Bearer ${authToken}` },
					}
				)
				.then((res) => {
					dispatch({
						type: "UPDATE_SEARCH_RESULTS",
						value: res.data.tracks.items.map((track) => {
							return {
								artist: track.artists[0].name,
								title: track.uri,
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
			<DashboardHeader />
			<DashboardAlbum
				albumCover={
					"https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg"
				}
			/>
		</>
	);
};
export default DashboardComponent;

// Render songs to screen
// limit results from api call
//Add player
//Play songs
// Add song image to screen
// Queue component
// Store songs to state (queue)
