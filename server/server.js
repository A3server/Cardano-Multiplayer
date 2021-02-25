const http = require('http');
const app = require('./app');

const port = process.env.PORT || 7000; //8000 is the port the server will be in.
const server = http.createServer(app);

server.listen(port);