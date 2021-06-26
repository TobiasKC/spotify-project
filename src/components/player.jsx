import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = (props) => {
	const authToken = useSelector((state) => state.authToken);
    const playQueue = useSelector((state) => state.playQueue);
	if (!authToken) return null;
	return <SpotifyPlayer token={authToken} uris={playQueue ? playQueue : []} autoPlay = {true} />;
};

export default Player;
