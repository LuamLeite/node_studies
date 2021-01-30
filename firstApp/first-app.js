const fs = require('fs'); //filesystem, one of node core-modules
fs.writeFileSync('hello.txt', 'Hello from Node.js'); //writing to a file.
console.log('Hello from Node.js');