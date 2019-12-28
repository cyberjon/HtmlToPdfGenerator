const app = require('./src/server');
const http = require('http');

const port = process.env.PORT || 80;

http.createServer(app).listen(port);
console.log(`Server listening on port ${port}`);
