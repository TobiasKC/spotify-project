const express = require("express"); //Require express
const app = express();

app.get("/", () => {
	console.log("Hello World");
});

app.listen(3000);
