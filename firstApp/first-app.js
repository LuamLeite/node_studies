const http = require ('http'); //importing global module

//Using an anonymous function so we don't need to declare it separatedely
const server = http.createServer((req, res) => {
    console.log('Server started!')
    console.log(req); //the server info!
});

server.listen(3001); //it will keep running to listen to requests at the port 3000