/**
 * Created by Evgeniy on 06.06.2014.
 */

var spawn = require('child_process').spawn,
    find = spawn('find', ['.', '-ls']),
    grep = spawn('grep', ['listing']);

grep.stdout.setEncoding('utf8');

find.stdout.on('data', function(data){
    grep.stdin.write(data);
});

grep.stdout.on('data', function(data){
    console.log(data);
});

find.stderr.on('data', function(data){
    console.log('find stderr: ' + data);
})

grep.stderr.on('data', function(data){
    console.log('grep stderr: ' + data);
})

find.on('close', function(code){
    if (code !== 0){
        console.log('find process exited with code ' + code);
    }
    grep.stdin.end();
});

grep.on('exit', function(code){
    if (code !== 0){
        console.log('grep process exited with code ' + code);
    }
});