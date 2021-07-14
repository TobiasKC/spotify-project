const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
//Create server
const server = http.createServer(app);
//Connect WS to server
//Can handle multiple connections
//Passes above
const wss = new WebSocket.Server({ server });

//Give it current WS and request
//Listens for new connections
wss.on("connection", (ws, req) => {
	console.log("New connection");
	//Listens for message (any message from any connected user)
	ws.on("message", (e) => {
		console.log("Message Recived");
		const payload = JSON.parse(e);
		//Attach ID to WS
		//Identifies a users current session
		if (payload.partyID) {
			ws.partyID = payload.partyID;
		}

		if (payload.trackID) {
			//Send message to all users with same party id
			//Loop over known ws
			wss.clients.forEach(function each(client) {
				//If ws open
				if (client.readyState === WebSocket.OPEN) {
					//Determine whether current socket has partners
					if (ws.partyID === client.partyID) {
						client.send(payload.trackID);
					}
				}
			});
		}
		console.log(ws.partyID);
	});
});

//Loop over available ws and

//Listens on top of express server
server.listen(8080, () => {
	console.log("WS Found");
});
