import BackButton from "./backButton";
import TextButton from "./textButton";

const getStarted = () => {
    return ( 
    <div className="card">
        <BackButton />
        <h3>Welcome to Spotify Web Player</h3>
        <p>To get started:</p>
        <TextButton class = {"cta"} text = {"Host a Session"}/>
        <TextButton class = {"cta"} text = {"Join a Session"}/>
    </div> );
}
 
export default getStarted;

//https://developer.spotify.com/documentation/general/design-and-branding/
//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
