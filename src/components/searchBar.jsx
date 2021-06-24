import { useDispatch } from "react-redux";

const SearchBar = (props) => {
	const dispatch = useDispatch();

	return (
		<input
			type='text'
			placeholder={props.placeholder}
			// Can't use state here, can if placeholder = value
			className={"searchBar"}
			onInput={(e) =>
				dispatch({ type: "UPDATE_SEARCH_TERM", value: e.target.value })
			}></input>
	);
};

export default SearchBar;
