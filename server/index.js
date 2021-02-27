const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer();
const io = require('socket.io')(server, {
    path: '/game',
    serveClient: false,

    //* below are engine.IO options
    // pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

server.listen(app.get('port'), (req, res) => {
  console.log('Listening on Port ' + app.get('port'));

  //TODO SERVERSTART
  //TODO GAMESTART

});

//A rota principal vai dar render ao index.
app.get('/', (req, res) => {
  res.render('index');
});

io.on('connect', function(socket) {
  require('./game/serverControl')(io, socket);
});
