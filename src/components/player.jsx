import Icon from "./fa-icon";
import { BsPlayFill } from "react-icons/bs";
import { BiSkipNextCircle } from "react-icons/bi";
import { BiSkipPreviousCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

const Player = () => {
	const isPlaying = useSelector((state) => state.isPlaying);

	return (
		<div className='playerContainer'>
			<Icon
				className='playControls'
				icon={BiSkipPreviousCircle}
				size='3em'
				endpoint={"playback/previous"}
			/>
			<Icon
				className='playControls'
				icon={BsPlayFill}
				size='3em'
				endpoint={isPlaying.isPlaying ? "playback/pause" : "playback/play"}
			/>
			<Icon
				className='playControls'
				icon={BiSkipNextCircle}
				size='3em'
				endpoint={"playback/next"}
			/>
		</div>
	);
};
export default Player;

//Recieve empty body if nothing has been played
//if 'paused' returns isplaying == false
