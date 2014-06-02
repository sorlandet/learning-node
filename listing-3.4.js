/**
 * Created by Yevgeniy on 02.06.2014.
 */

var http = require('http');
var fs = require('fs');


http.createServer(function(req, res) {

    var query = require('url').parse(req.url).query;
    var file = require('querystring').parse(query).file;

    console.log('query: ' + query);
    //console.log('app: ' + app);

    res.writeHead(200, {'content-type': 'text/plain'});

    for (var i = 0; i<100; i++) {
        res.write(i + '\n');
    }

    var data = fs.readFileSync(file, 'utf8');
    res.write(data);
    res.end();

}).listen('/tmp/node-server-sock');