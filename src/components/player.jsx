import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = (props) => {
	const authToken = useSelector((state) => state.authToken);
	const playQueue = useSelector((state) => state.playQueue);
	//No token dont render player
	if (!authToken) return null;
	//Pre-made player component
	return (
		<SpotifyPlayer
			token={authToken}
			uris={playQueue ? playQueue : []}
			autoPlay={true}
			play={true}
			magnifySliderOnHover={true}
			styles={{
				activeColor: "#fff",
				bgColor: "#333",
				color: "#fff",
				loaderColor: "#fff",
				loaderSize: "20px",
				sliderColor: "#1cb954",
				trackArtistColor: "#ccc",
				trackNameColor: "#fff",
				height: "150px",
			}}
		/>
	);
};
export default Player;
