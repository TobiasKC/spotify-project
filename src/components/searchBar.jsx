import TrackSearchResults from "./TrackSearchResults";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = (props) => {
	const dispatch = useDispatch();
	const searchResults = useSelector((state) => state.searchResults);
	const searchTerm = useSelector((state) => state.searchTerm);
	return (
		<>
			<input
				type='text'
				placeholder={props.placeholder}
				// Can't use state here, can if placeholder = value
				className={"searchBar"}
				onInput={(e) =>
					dispatch({ type: "UPDATE_SEARCH_TERM", value: e.target.value })
				}></input> 
			<div className={searchTerm.length > 0 ?"resultsContainer" : "hidden"}>
				<div className={searchTerm.length > 0 ?"trackSearchResults" : "hidden"}>
					{searchResults.map((track) => (
						<TrackSearchResults
							title={track.title}
							albumCover={track.albumUrl}
							artist={track.artist}
						/>
					))}
				</div>
			</div>
		</>
	);
}
export default SearchBar;
