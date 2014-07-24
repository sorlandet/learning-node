var connect = require('connect');
var http = require('http');

var app = connect();

// respond to all requests
app.use(function(req, res){
    res.end('Hello from Connect!');
});


//create node.js http server and listen on port
http.createServer(app).listen(9000);

//connect.createServer(function(req, res) {
//    res.writeHead(200, {
//        'Content-Type': 'text/plain'
//    });
//    res.end('Hello World');
//}).listen(9000, '0.0.0.0');


