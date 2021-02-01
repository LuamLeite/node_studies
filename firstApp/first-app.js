const http = require ('http'); //importing global module

const routes = require('./routing');
//Using an anonymous function so we don't need to declare it separatedely
const server = http.createServer(routes);

server.listen(3001); //it will keep running to listen to requests at the port 3000
