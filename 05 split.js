var split = require('split');
var map = require('through2-map');

var index = 0;

process.stdin.pipe(split()).pipe(map(function(line){
	index++;

	if (index % 2 == 0)
		return line.toString().toUpperCase() + '\n';
	else
		return line.toString().toLowerCase() + '\n';
})).pipe(process.stdout);

// var through = require('through2');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;