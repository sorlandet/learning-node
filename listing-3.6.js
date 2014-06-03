/**
 * Created by Evgeniy on 03.06.2014.
 */
var dgram = require('dgram');
var client = dgram.createSocket('udp4');

process.stdin.resume();

process.stdin.on('data', function(data){
    console.log(data.toString('utf8'));
    client.send(data, 0, data.length, 9004, 'development.local', function(err, bytes) {
        if (err) {
            console.log('error: ' + err);
        } else {
            console.log('successful');
        }
    });
});