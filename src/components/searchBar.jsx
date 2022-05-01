import TrackSearchResults from "./trackSearchResults";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../images/logo_white.png";
import ClickAwayListener from "react-click-away-listener";
const SearchBar = (props) => {
	const dispatch = useDispatch();

	const searchResults = useSelector((state) => state.searchResults);
	const searchTerm = useSelector((state) => state.searchTerm);

	function handleClickaway() {
		dispatch({ type: "UPDATE_SEARCH_TERM", value: "" });
	}

	return (
		<>
			<img src={Logo} alt='Not Found' className={"spotifyLogo"} />
			<input
				type='text'
				placeholder={props.placeholder}
				className={"searchBar"}
				value={searchTerm}
				onInput={(e) => {
					dispatch({ type: "UPDATE_SEARCH_TERM", value: e.target.value });
				}}></input>
			<ClickAwayListener onClickAway={handleClickaway}>
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
			</ClickAwayListener>
		</>
	);
};
export default SearchBar;
