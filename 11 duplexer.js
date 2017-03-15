var duplexer = require('duplexer');
var child_process = require('child_process')

module.exports = function(cmd, args) {
	spawn = child_process.spawn(cmd, args);

	return duplexer(spawn.stdin, spawn.stdout);
};
