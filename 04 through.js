var map = require('through2-map');

process.stdin.pipe(map(function(chunk){
	return chunk.toString().toUpperCase();
})).pipe(process.stdout);

// var through = require('through2');
// var tr = through(function (buf, _, next) {
//     this.push(buf.toString().toUpperCase());
//     next();
// });
// process.stdin.pipe(tr).pipe(process.stdout);