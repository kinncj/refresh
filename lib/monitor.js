var fs = require("fs");
var io;
var monitor = {
	directory: '',
	watch: function(server, directory)
	{
		that = this;
		that.directory = directory;
		io = require('socket.io').listen(server);
		server.on('request', function(response){
			peer = response.client._peername;
			io.sockets.on('connection', function (socket) {
  
				fs.watch(that.directory, function (event, filename) {
					if (event == 'change' &&  peer != undefined) {
						connection = socket.emit('update', { refresh: true });
					}
				});
			});
		});
		server.setMaxListeners(0);
	}
}
module.exports = monitor;