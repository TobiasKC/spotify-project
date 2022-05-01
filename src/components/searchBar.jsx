import TrackSearchResults from "./trackSearchResults";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../images/logo_white.png";

const SearchBar = (props) => {
	const dispatch = useDispatch();

	const searchResults = useSelector((state) => state.searchResults);
	const searchTerm = useSelector((state) => state.searchTerm);

	return (
		<>
			<img src={Logo} alt='Not Found' className={"spotifyLogo"} />
			<input
				type='text'
				placeholder={props.placeholder}
				className={"searchBar"}
				//On input update state with current search query for API call
				onInput={(e) => {
					console.log(e.target.value);
					dispatch({ type: "UPDATE_SEARCH_TERM", value: e.target.value });
				}}></input>
			<div //If search term exists, show search results container
				className={searchTerm.length > 0 ? "resultsContainer" : "hidden"}>
				{searchResults.map((track) => (
					<TrackSearchResults
						title={track.title}
						albumCover={track.albumUrl}
						artist={track.artist}
						id={track.id}
					/>
				))}
			</div>
		</>
	);
};
export default SearchBar;
