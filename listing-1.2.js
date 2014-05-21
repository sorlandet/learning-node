/**
 * Created by Yevgeniy on 20.05.2014.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    fs.readFile('helloworld.txt', 'utf8', function(err, data) {
        res.writeHead(200, {'content-type': 'text/plain'});
        if (err)
            res.write('Could not find or open file for reading\n');
        else
            res.write(data);
        res.end();
    });
}).listen(9004, function() {
    console.log('bound to port 9004');
})

console.log('Server running on 9004');