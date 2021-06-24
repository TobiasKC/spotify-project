import DashboardHeader from "./dashboardHeader";
import DashboardAlbum from "./dashboardAlbum";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const DashboardComponent = () => {
	const authToken = useSelector((state) => state.authToken);
	// On Component mount, set value of authToken in state to result of fetchToken. Before useSelector() exectues.
	
	useEffect(() => {
		dispatch({ type: "UPDATE_AUTH_TOKEN", value: fetchToken() });
	});

	function fetchToken() {
		const url = new URLSearchParams(window.location.href).toString();
		const firstChar = url.indexOf("=");
		const secondChar = url.indexOf("&");
		return url.substring(firstChar, secondChar).slice(1);
	}

	// Connect to the store. Only accessing authToken currently
	// authToken is ref used to query state.authToken
	// const authToken = useSelector((state) => state.authToken);
	const searchTermState = useSelector((state) => state.searchTerm);

	//Enable dispatch
	const dispatch = useDispatch();

	// Grab authToken from URL and return
	// Including function outside of useEffect is throwing warning, try including to remove
	// :  https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook



	const songName = "californication";
	const searchType = "track";

	useEffect(() => {
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
