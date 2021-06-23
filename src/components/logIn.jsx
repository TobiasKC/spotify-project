import BackButton from "./backButton";
import TextButton from "./textButton";

    return ( 
    <div className="card">
        <BackButton />
        <h3>Welcome to Spotify Web Player</h3>
        <p>To get started:</p>
        <TextButton class = {"cta"}  text = {"Log in with Spotify"}/>
        <TextButton  class = {"cta"} text = {"Proceed without log in"}/>
    </div>
    );
}
 
export default logIn;