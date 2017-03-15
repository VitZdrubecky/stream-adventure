var trumpet = require('trumpet');
var map = require('through2-map');

var tr = trumpet();

// https://github.com/nodeschool/discussions/issues/346
process.stdin.pipe(tr).pipe(process.stdout);
var stream = tr.select('.loud').createStream();
stream.pipe(map(function(chunk){
	return chunk.toString().toUpperCase();
})).pipe(stream);

// var trumpet = require('trumpet');
// var through = require('through2');
// var tr = trumpet();

// var loud = tr.select('.loud').createStream();
// loud.pipe(through(function (buf, _, next) {
//   this.push(buf.toString().toUpperCase());
//   next();
// })).pipe(loud);

// process.stdin.pipe(tr).pipe(process.stdout);