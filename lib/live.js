var live = {
	getLive: function()
	{
		live = "<script src='/socket.io/socket.io.js'></script>\n";
		live+= "<script>\n";
  		live+= "var socket = io.connect('http://localhost');\n";
  		live+= "socket.on('update', function (data) {\n";
    	live+= "	if (data.refresh == true) {\n";
		live+= "		window.location.reload(true);\n";
    	live+= "	}\n";
  		live+= "});\n";
		live+= "</script>\n";
		live+= "</body>\n";
		return live;
	}
}
module.exports = live;
