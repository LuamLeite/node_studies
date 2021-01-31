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
        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk:', chunk);
            body.push(chunk);
        }); //listening to events, the data event will be fired whenever a new chunk of information is ready to be fired
        //we need to define a function to execute

        req.on('end', () => {//process all chunks
            const parsedBody = Buffer.concat(body).toString();
            //get all body chunks and concatenate then to a new buffer and converts to string
            console.log('parsed Body:', parsedBody);
            const message = parsedBody.split('=')[1]; //to get the message without =, and getting the position 1 resulting part of the array
            fs.writeFileSync('message.txt', message); //writing the text to the file
        }); 
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
