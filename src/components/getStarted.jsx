import BackButton from "./backButton";
import TextButton from "./textButton";

const clientID = "07310eeebf82492b914f9156e15dceef";
const redirectURL = "http://localhost:3000/dashboard";
const scope =
	"streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const authURL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope}`;
//To do: Connect to the store, link = state.authURL

const GetStarted = () => {
	return (
		<div className='card'>
			{/* <BackButton /> */}
			<h3>Welcome to Spotify Web Player</h3>
			<p>To get started:</p>
			<TextButton class={"cta"} link={authURL} text={"Host a Session"} />
			<TextButton class={"cta"} text={"Join a Session"} />
		</div>
	);
};

export default GetStarted;
//https://developer.spotify.com/documentation/general/design-and-branding/
//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
