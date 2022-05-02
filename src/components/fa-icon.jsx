import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { BASE_API_URL } from "../constants";

const Icon = (props) => {
	// Store is playing state in redux (for play / pause)
	const dispatch = useDispatch();
	const authToken = useSelector((state) => state.authToken);

	function handlePlayback(endpoint) {
		axios
			.put(
				`${BASE_API_URL}${endpoint}`,
				{},
				{
					headers: {
						token: `${authToken}`,
						"Content-Type": "application/json",
						"cache-control": "no-cache",
					},
				}
			)
			.then((res) => {
				dispatch({
					type: "UPDATE_CURRENT_PLAY",
					value: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<>
			<button
				onClick={() => handlePlayback(props.endpoint)}
				className='controlButton'>
				<props.icon size={props.size} />
			</button>
		</>
	);
};

export default Icon;
