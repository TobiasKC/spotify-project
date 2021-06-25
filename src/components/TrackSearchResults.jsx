import { useSelector } from "react-redux";
const TrackSearchResults = (props) => {
	const searchTerm = useSelector((state) => state.searchTerm);
	
		return (
			<>
				<div className={searchTerm.length > 0 ? "trackSearchResults" : "hidden"}>
					<img
						src={props.albumCover}
						alt='Image Not Found'
						className={"searchImage"}
					/>
					<p className={"searchTitle"}>{props.title}</p>
					<p className={"searchArtist"}>{props.artist}</p>
				</div>
			</>
		);
	};

export default TrackSearchResults;
