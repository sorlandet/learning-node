/**
 * Created by Yevgeniy on 02.06.2014.
 */

var net = require('net');

var server = net.createServer(function(conn) {
    console.log('connected');
    conn.on('data', function(data) {
        console.log(data + ' from ' + conn.remoteAddress + ' ' + conn.remotePort);
        conn.write('Reapiting: ' + data);
    })
    conn.on('close', function(){
        console.log('client closed connection');
    });
}).listen(9004);

console.log('listening on port 9004')