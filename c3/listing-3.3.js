/**
 * Created by Yevgeniy on 02.06.2014.
 */
var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

client.connect('9004', 'localhost', function () {
    console.log('connected to server');
    client.write('whe needs a browser to communicate?');
});

process.stdin.resume();

process.stdin.on('data', function(data) {
    client.write(data);
});

client.on('data', function(data) {
    console.log(data);
});

client.on('close', function () {
    console.log('connection is closed');
});