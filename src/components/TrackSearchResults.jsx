import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const TrackSearchResults = (props) => {
	const searchTerm = useSelector((state) => state.searchTerm);
	const playQueue = useSelector((state) => state.playQueue);
	const dispatch = useDispatch();

	// this works, using local
	// 	function selectTrack(trackID){
	// 		console.log(trackID);
	// 		return trackID;
	//    };
// https://dev.to/andyrewlee/cheat-sheet-for-updating-objects-and-arrays-in-react-state-48np

// Try just updating the state with reducer

	function selectTrack(trackID) {
		dispatch({
			type: "UPDATE_PLAY_QUEUE",
			value: [...playQueue, trackID],
		});
		console.log(playQueue);
	}

	return (
		<>
			<div
				onClick={() => selectTrack(props.id)}
				className={searchTerm.length > 0 ? "trackSearchResults" : "hidden"}>
				<img src={props.albumCover} alt='Not Found' className={"searchImage"} />
				<p className={"searchTitle"}>{props.title}</p>
				<p className={"searchArtist"}>{props.artist}</p>
				<p className={"searchTitle"}>{props.id}</p>
			</div>
		</>
	);
};

export default TrackSearchResults;
