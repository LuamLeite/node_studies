const http = require ('http'); //importing global module
const fs = require('fs');
//Using an anonymous function so we don't need to declare it separatedely
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/')
    {
        res.write('<html>');
        res.write('<head><title> Enter text </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); //return res.end so we can not execute the code below after, after that it will change to localhost/message
    }
    if(url === '/message' && method === 'POST') {
        console.log('hello');
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302; //write some metadata, 302 for redirection
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html'); //it will attach a header to our response to send to the browser the content-type
    res.write('<html>');
    res.write('<head><title> My First Page </title></head>');
    res.write('<body><h1>Hello from my Node.js Server! <h1></body>');
    res.write('</html>');
    res.end(); //we can't use write anymore after that because node.js will send it back

});

server.listen(3001); //it will keep running to listen to requests at the port 3000
