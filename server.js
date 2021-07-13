const express = require("express"); //Require express
const axios = require("axios");
const app = express();
app.use(express.json());

const clientID = "07310eeebf82492b914f9156e15dceef";
const redirectURL = "http://localhost:3000/dashboard";
const scope =
	"streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const authURL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope}`;

const searchType = "track";
const searchTermState = "Post Malone";
const authToken =
	"BQBGi1S9OBalYFVvVV3nEmBK4iYeew9XBKmsHwuh7AuYcjM7KdrpjPguGhxVy5ERrbOYE95G4zRQ6Be2XV2ltuEbFLakMMFBeUkyZQwZLFJ-XtO21DboCpaZN5et8dL3j4K_6ofsgSzkLalsfJB2qOrdZiUY4anSDJZCst7to1CWqUmvOTSyM5PX980z";

//To do (Create new branch):

// Change React GET to point to server, add dynamic authToken to headers
//Access authToken with req.headers and use to make Spotiy API call
//Return Tracks to React
//Implement track results into current project

app.get("/", () => {
	axios
		.get(
			`https://api.spotify.com/v1/search?q=${searchTermState}&type=${searchType}`,
			{
				headers: { Authorization: `Bearer ${authToken}` },
			}
		)
		.then((res) => {
			console.log(res.data.tracks.items);
		})
		//Log error if present
		.catch((err) => {
			console.log(err);
		});
	console.log("Hello");
});

app.get("/", () => {
	console.log("Hello World");
});

app.listen(5500);
