const express = require("express");
const router = express.Router();

router.get("/authorise", async (req, res) => {
	// Cors not allowing redirect
	res.send(
		`https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}&scope=${process.env.SCOPE}`
	);
});

module.exports = router;
