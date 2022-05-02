const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/results", (req, res) => {
	async function getApiData() {
		try {
			let result = await axios.get(
				`https://api.spotify.com/v1/search?q=${req.query.searchTerm}&type=track`,
				{
					headers: { Authorization: `Bearer ${req.headers.token}` },
				}
			);
			res.send(result.data.tracks.items);
		} catch (err) {
			console.log(err);
		}
	}

	getApiData();
});

module.exports = router;
