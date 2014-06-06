/**
 * Created by Evgeniy on 06.06.2014.
 */
var  dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message', function(msg, rinfo){
    console.log("Message: " + msg + " from " + rinfo.address + ":" + rinfo.port);
})

server.bind(9000);