/**
 * Created by Evgeniy on 06.06.2014.
 */
var eventEmitter = require('events').EventEmitter;
var counter = 0;
var em = new eventEmitter();

setInterval(function(){em.emit('timed', counter++);}, 500);

em.on('timed', function(data){
    console.log('timed ' + data);
})
