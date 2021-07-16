const express = require("express");
const router = express.Router();
const axios = require("axios");

const searchType = "track";
const searchTermState = "Post Malone";

//isPlaying?
//Endpoint works from insomnia
// router.get("/isPlaying", (req, res) => {
// 	checkPlay();
// });

//Handle play
router.put("/play", (req, res) => {
	async function handlePlay() {
		try {
			await axios.put(
				"https://api.spotify.com/v1/me/player/play",
				{
					uris: ["spotify:track:21jGcNKet2qwijlDFuPiPb"], //Hard coded- need to update to be dynamic
				},
				{
					headers: { Authorization: `Bearer ${req.headers.token}` },
				}
			);
		} catch (err) {
			console.log(err);
		}

		try {
			let payload = await axios.get("https://api.spotify.com/v1/me/player", {
				headers: {
					Authorization: `Bearer ${req.headers.token}`,
					"Content-Type": "application/json",
					"cache-control": "no-cache",
				},
			});
			res.send({
				isPlaying: payload.data.is_playing,
				uri: payload.data.item.uri,
			});
		} catch (err) {
			console.log(err);
		}
	}
	handlePlay();

	console.log("play");
});

router.put("/pause", (req, res) => {
	console.log("paused");
});

//Handle skipping
router.put("/next", (req, res) => {
	console.log("next");
});

//Handle reverting to previous
router.put("/previous", (req, res) => {
	console.log("previous");
});

module.exports = router;
