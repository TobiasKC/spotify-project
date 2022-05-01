const express = require("express");
const router = express.Router();
const axios = require("axios");

const searchType = "track";
const searchTermState = "Post Malone";

router.get("/results", (req, res) => {
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

module.exports = router;
