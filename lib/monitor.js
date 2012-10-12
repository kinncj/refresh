var fs = require("fs");
var Inotify = require('inotify').Inotify;

inotify = new Inotify();

var io;

var callback = function(event) {
    var mask = event.mask;
    var type = mask & Inotify.IN_ISDIR ? 'directory ' : 'file ';
    event.name ? type += ' ' + event.name + ' ': ' ';

    //the porpuse of this hell of 'if'
    //statements is only illustrative.
    switch(true) {
        case Boolean(Inotify.IN_MODIFY):
        case Boolean(Inotify.IN_CLOSE_WRITE):
        case Boolean(Inotify.IN_ATTRIB):
        case Boolean(Inotify.IN_CREATE):
        case Boolean(Inotify.IN_DELETE):
        case Boolean(Inotify.IN_DELETE_SELF):
        case Boolean(Inotify.IN_MOVE_SELF):
        case Boolean(Inotify.IN_MOVED_FROM):
        case Boolean(Inotify.IN_MOVED_TO):
        	monitor.emmit();
        	return true;
        	break;
        default:
        	return false;
        	break;
    }
}

var watch_dir = function(dir){
	this.path = dir;
	this.watch_for = Inotify.IN_OPEN | Inotify.IN_CLOSE;
    this.callback =  callback;
};


var monitor = {
	directory: '',
	socket: null,
	watch: function(server, directory)
	{
		that = this;
		that.directory = directory;
		io = require('socket.io').listen(server);
		server.on('request', function(response){
			peer = response.client._peername;
			io.sockets.on('connection', function (socket) {
				that.socket = socket;
  				var updated = inotify.addWatch(new watch_dir(that.directory));
			});
		});
		io.setMaxListeners(0);
		server.setMaxListeners(0);
	},
	emmit: function()
	{
		if (this.socket != null) {
			connection = this.socket.emit('update', { refresh: true });
		}
	}
}
module.exports = monitor;