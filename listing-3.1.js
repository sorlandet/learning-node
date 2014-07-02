/**
 * Created by Yevgeniy on 21.05.2014.
 */

process.stdin.resume();

process.stdin.on('data', function(chunk) {
    process.stdout.write('data: ' + chunk);
});