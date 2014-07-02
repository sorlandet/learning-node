/**
 * Created by Yevgeniy on 21.05.2014.
 */

var http = require('http');

var options = {
    host: 'localhost',
    port: 9004,
    path: '/?file=helloworld',
    method: 'GET'
};

var processPublicTimeline = function(response) {
    console.log('request ended');
};

for (var i = 0; i < 500; i++) {
    http.request(options, processPublicTimeline()).end();
}

