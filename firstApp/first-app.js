// const fs = require('fs'); //filesystem, one of node core-modules
// fs.writeFileSync('hello.txt', 'Hello from Node.js'); //writing to a file.
// console.log('Hello from Node.js');

const http = require ('http'); //importing global module

function rqListener(req, res) {

}
http.createServer(rqListener); //receives a function that will execute for every incoming request
//We don't need to use () here. it will search for the function with the same name.
