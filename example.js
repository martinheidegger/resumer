var resumer = require('.');
var s = createStream();
s.pipe(process.stdout);

function createStream () {
    var stream = resumer();
    stream.push('beep boop\n');
    return stream;
}
