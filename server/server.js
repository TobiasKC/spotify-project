const express = require("express"); //Require express
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

//Store in 'credentials' object for tidyness
const clientID = "07310eeebf82492b914f9156e15dceef";
const redirectURL = "http://localhost:3000/dashboard/";
const scope =
	"streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const authURL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope}`;

const searchType = "track";
const searchTermState = "Post Malone";

//function should take all variables as parameters, sent in get rwquest headers
app.get("/search", (req, res) => {
	async function getApiData() {
		try {
			let result = await axios.get(
				`https://api.spotify.com/v1/search?q=${searchTermState}&type=${searchType}`,
				{
					headers: { Authorization: `Bearer ${req.headers.token}` },
				}
			);
			//Inside try statement
			res.send(result.data.tracks.items);
		} catch (err) {
			console.log(err);
		}
	}

	getApiData();
});

app.use("/playback", require("./routes/playback"));

app.listen(5500);
