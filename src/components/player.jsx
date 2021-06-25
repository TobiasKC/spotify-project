import { useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";

const Player = () => {
    const authToken = useSelector((state) => state.authToken);
    if(!authToken) return null
	return <SpotifyPlayer 
    token ={authToken}/>;
    //uris={trackUri ? [trackUri] : []} />;
};

export default Player;
