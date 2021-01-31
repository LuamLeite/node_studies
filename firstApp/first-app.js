const http = require ('http'); //importing global module

//Using an anonymous function so we don't need to declare it separatedely
const server = http.createServer((req, res) => {
    console.log('Server started!')
    console.log(req); //the server info!
    //process.exit //quit server, you don't normally call this on your code.
    console.log('url:',req.url); 
    console.log('method:',req.method); 
    console.log('headers:', req.headers);
    res.setHeader('Content-Type', 'text/html'); //it will attach a header to our response to send to the browser the content-type
    res.write('<html>');
    res.write('<head><title> My First Page </title></head>');
    res.write('<body><h1>Hello from my Node.js Server! <h1></body>');
    res.write('</html>');
    res.end(); //we can't use write anymore after that
});

server.listen(3001); //it will keep running to listen to requests at the port 3000
