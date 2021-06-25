const TrackSearchResults = (props) => {
	return (
		<>
			<div className={"trackSearchResults"}>
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
