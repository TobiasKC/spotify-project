import TextButton from "./textButton";
import { useEffect, useState } from "react";
import axios from "axios";

const GetStarted = () => {
	// Todo - Hook up auth token once CORS issue sorted
	const [authUrl, setAuthUrl] = useState("");
	useEffect(() => {
		axios
			.get(`http://localhost:5500/logIn/authorise`)
			.then((res) => {
				setAuthUrl(res.data);
				console.log(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div className='card'>
			<h3>Welcome to Spotify Web Player</h3>
			<TextButton
				disabled={!authUrl}
				class={"cta"}
				link={authUrl}
				text={"Get Started"}
			/>
		</div>
	);
};

export default GetStarted;
//https://developer.spotify.com/documentation/general/design-and-branding/
//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
