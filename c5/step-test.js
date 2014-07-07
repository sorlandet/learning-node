var fs = require('fs'),
    Step = require('step');

Step(
    function readDir() {
        console.log(__dirname + "/data");
        fs.readdir(__dirname + "/data", this);
    },
    function readFiles(err, results) {
        if (err) throw err;
        // Create a new group
        var group = this.group();
        results.forEach(function (filename) {
            if (/\.txt$/.test(filename)) {
                fs.readFile(__dirname + "/data" + "/" + filename, 'utf8', group());
            }
        });
    },
    function showAll(err , files) {
        if (err) throw err;
        console.dir(files);
    }
);
