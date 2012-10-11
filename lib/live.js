var live = {
	getLive: function()
	{
		live = "<script src='/socket.io/socket.io.js'></script>";
		live+= "<script>";
  		live+= "var socket = io.connect('http://localhost');";
  		live+= "socket.on('update', function (data) {";
    	live+= "	if (data.refresh == true) {";
		live+= "		window.location.reload(true);";
    	live+= "	}";
  		live+= "});";
		live+= "</script>";
		live+= "</body>";
		return live;
	}
}
module.exports = live;