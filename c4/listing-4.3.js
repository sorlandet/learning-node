/**
 * Created by Evgeniy on 09.06.2014.
 */

var inputChecker = require('inputcheck').inputChecker;

var ic = new inputChecker('Shelley', 'output');

ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8');
});

ic.on('echo', function(data) {
    console.log(this.name + ' wrote ' + data);
});

ic.on('end', function(data) {
    process.exit();
});

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(input) {
    ic.check(input);
});