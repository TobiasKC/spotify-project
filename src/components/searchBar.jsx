import TrackSearchResults from "./trackSearchResults";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = (props) => {
	const dispatch = useDispatch();
	const searchResults = useSelector((state) => state.searchResults);
	const searchTerm = useSelector((state) => state.searchTerm);

	return (
		<>
			<img src="..\images\logo_black.png" alt="Not Found" className={"spotifyLogo"} />
			<input
				type='text'
				placeholder={props.placeholder}
				// Can't use state here, can if placeholder = value
				className={"searchBar"}
				onInput={(e) =>
					dispatch({ type: "UPDATE_SEARCH_TERM", value: e.target.value })
				}></input>
			<div className={searchTerm.length > 0 ? "resultsContainer" : "hidden"}>
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
