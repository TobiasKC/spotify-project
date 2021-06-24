import DashboardHeader from "./dashboardHeader";
import DashboardAlbum from "./dashboardAlbum";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const DashboardComponent = () => {
	// On Component mount, set value of authToken in state to result of fetchToken. Before useSelector() exectues.

	useEffect(() => {
		dispatch({ type: "UPDATE_AUTH_TOKEN", value: fetchToken() });
	},[]);

	const authToken = useSelector((state) => state.authToken);

	function fetchToken() {
		const url = new URLSearchParams(window.location.href).toString();
		const firstChar = url.indexOf("=");
		const secondChar = url.indexOf("&");
		return url.substring(firstChar, secondChar).slice(1);
	}

	const searchTermState = useSelector((state) => state.searchTerm);

	//Enable dispatch
	const dispatch = useDispatch();

	//Logs state and undefined similatenousy
	console.log(searchTermState);
	// Api call works with songName in GET request
	const songName = "happy";
	const searchType = "track";

	//Possible that state isnt being updated/read fast enough
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (!authToken) console.log("Token not found", authToken);
			if (!searchTermState) console.log("State not found", searchTermState);
			axios
				.get(
					`https://api.spotify.com/v1/search?q=${searchTermState}&type=${searchType}`,
					{
						headers: { Authorization: `Bearer ${authToken}` },
					}
				)
				.then((res) => {
					console.log(
						res.data.tracks.items.map((track) => {
							return {
								artist: track.artists[0].name,
								title: track.uri,
								albumUrl: track.album.images[2].url,
							};
						})
					);
				})
				.catch((err) => {
					console.log(err);
				});
		}, 500);
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
