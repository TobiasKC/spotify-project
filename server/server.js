const express = require("express");
const cors = require("cors");
const app = express();
const env = require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use("/search", require("./routes/search"));
app.use("/playback", require("./routes/playback"));
app.use("/logIn", require("./routes/logIn"));

app.listen(process.env.PORT || 5500);
