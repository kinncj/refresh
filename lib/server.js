var http       = require('http');
var url        = require('url');
var monitor    = require('./monitor');
var httpProxy  = require('./http-proxy/node-http-proxy.js');

var server = {
	response: null,
	httpProxyServer: null,
	create : function(ip, port, server, serverport, directory)
	{
		var that = this;
		this.httpProxyServer = httpProxy.createServer(function (req, res, proxy) {
												this.peer = res.connection._peername;
												proxy.proxyRequest(req, res, {
												  host: server,
												  port: parseInt(serverport)
												});
												that.response = res;
											}).listen(parseInt(port));
		monitor.watch(this.httpProxyServer,directory);
	}
}
module.exports = server;