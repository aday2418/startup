const express = require('express');
const { WebSocketServer, WebSocket } = require('ws');
const http = require('http');

const app = express();
const port = process.env.PORT || 80;

global.usersOnline = []
global.userConnections = new Map()

// Set up a route
app.get('/', (req, res) => {
  res.send('This is the websocket server hosted on express!');
});

// Create an HTTP server and attach Express app as request handler
const server = http.createServer(app);

// Create a WebSocket server and attach it to the HTTP server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  //global.friendsOnline++

  // Function to broadcast the number of friends online to all connected clients
    const broadcastFriendsOnline = () => {
        console.log(global.usersOnline)
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
            client.send('Friends online: ' + global.usersOnline);
            }
        });
    };

    // Broadcast when a new client connects
    

  ws.on('message', (message) => {
    console.log("recieved message")
    const res = JSON.parse(message)
    console.log(res)

    if(!global.usersOnline.includes(res.data.username))
        global.usersOnline.push(res.data.username)
        global.userConnections.set(ws, res.data.username)
    broadcastFriendsOnline();
  });

  ws.on('close', () => {
    const username = global.userConnections.get(ws)
    global.userConnections.delete(ws)
    console.log(username, 'disconnected');
    global.usersOnline = global.usersOnline.filter(user => user !== username)
    global.userConnections.delete(ws)
    //global.friendsOnline--
    broadcastFriendsOnline();
  });
});

// Listen on the specified port
server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
