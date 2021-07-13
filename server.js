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
	"BQAFgPR1xZ9deb6owtepExTR0q5LTgBdMLdvSpYYPAZ9R8QqCo3UI6zE1TeKWVDIfuY4oKd22mE733ajdydQDH3diw0oPquoYphsaoyN2Q-pmAN-VixPjk2DlL_gTDYEHrNRsvjV89Bcub5TBNum2ZyG65UhR9TtKdcw2mOuIaz-nxki2UB2_WRbGkIV";

//To do (Create new branch):

// Change React GET to point to server, add dynamic authToken to headers
//Access authToken with req.headers and use to make Spotiy API call
//Return Tracks to React
//Implement track results into current project

//function should take all variables as parameters, sent in get rwquest headers
app.get("/", (request, response) => {
	async function getApiData() {
		await axios
			.get(
				`https://api.spotify.com/v1/search?q=${searchTermState}&type=${searchType}`,
				{
					headers: { Authorization: `Bearer ${authToken}` },
				}
			)
			.then((res) => {
				response.send(res.data.tracks.items);
			});
	}

	getApiData();
});

// console.log(
// 	getSpotifyTracks()
// 		.then(function (res) {
// 			return res;
// 		})
// 		.catch(function (err) {
// 			console.log(err);
// 		})
// );

app.get("/", () => {
	console.log("Hello World");
});

app.listen(5500);
