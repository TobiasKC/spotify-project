import BackButton from "./backButton";
import TextButton from "./textButton";

const card = () => {
    return ( 
    <div className="bigCard">
        <BackButton />
        <h3>Welcome to Spotify Web Player</h3>
        <p>To get started:</p>
        <TextButton  text = {"Host a Session"}/>
        <TextButton  text = {"Join a Session"}/>
    </div> );
}
 
export default card;

//https://developer.spotify.com/documentation/general/design-and-branding/