/**
 * Created by Evgeniy on 23.07.2014.
 */

var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World');
}).listen(9000, '0.0.0.0');