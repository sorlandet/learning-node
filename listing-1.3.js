/**
 * Created by Yevgeniy on 21.05.2014.
 */
var http = require('http');
var fs = require('fs');


function writeNumbers(res) {
    var counter = 0;

    for (var i = 0; i < 100; i++) {
        counter++;
        res.write(counter.toString() + '\n');
    }
}

http.createServer(function(req, res) {

    var query = require('url').parse(req.url).query;
    var app = require('querystring').parse(query).file + ".txt";

    //console.log('query: ' + query);
    //console.log('app: ' + app);

    res.writeHead(200, {'content-type': 'text/plain'});

    writeNumbers(res);

    setTimeout(function() {
        console.log('opening ' + app);

        fs.readFile(app, 'utf8', function(err, data) {

            if (err)
                res.write('Could not find or open file for reading\n');
            else
                res.write(data);

            res.end();
        });
    }, 2000);


}).listen(9004, function() {
    console.log('bound to port 9004');
})

console.log('Server running on 9004');