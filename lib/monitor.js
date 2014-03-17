var fs      = require("fs");
var watch = require('watch');
var sys     = require('sys')
var exec    = require('child_process').exec;
var io;

var watch_dir = function(dir){
	this.path = dir;
	this.watch_for = Inotify.IN_OPEN | Inotify.IN_CLOSE;
    this.callback =  callback;
};


var monitor = {
	directory: '',
	socket: null,
	command: true,
    updated: false,
	watch: function(server, directory, command)
	{
		that 		   = this;
		that.directory = directory;
		that.command   = command;
		io 			   = require('socket.io').listen(server);

		server.on('request', function(response){
			peer = response.client._peername;
			io.sockets.on('connection', function (socket) {
				that.socket = socket;
			});
		});
        console.log(directory);
        watch.watchTree(directory, function (f, curr, prev) {
            if (typeof f == "object" && prev === null && curr === null) {
              // Finished walking the tree
            } else if (prev === null) {
              // f is a new file
              that.emmit();
            } else if (curr.nlink === 0) {
              // f was removed
              that.emmit();
            } else {
              // f was changed
              that.emmit();
            }
        });
    	io.setMaxListeners(0);
    	server.setMaxListeners(0);

        return this.updated;
	},
	emmit: function()
	{
		if (this.socket != null) {
			connection = this.socket.emit('update', { refresh: true });
			if (this.command !== true) {
				exec(this.command, function(error, stdout, stderr){
					sys.puts(stdout);
				});
			}
		}
	}
}
module.exports = monitor;
