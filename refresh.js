#!/usr/bin/env node


var program = require('commander');
var server  = require('./lib/server');
var usage   = '-s <localhost> -p <1337> -r <localhost> -t<80> -d </var/www/kinncj> -c ["ls -la"]';
program
  .version('0.0.1')
  .usage(usage)
  .option('-s, --server <server> -no-', 'Specify the local server', 'localhost')
  .option('-p, --localport <localport> -no-', 'Local port', '1337')
  .option('-r, --remoteserver <remoteserver> -no-', 'Remote Server', 'localhost')
  .option('-t, --remoteport <remoteport> -no-', 'Remote server port', '80')
  .option('-d, --directory <directory> -no-', 'Directory to watch', '/tmp')
  .option('-c, --command [command] -no-', 'A command to run for each update', 'ls -ls')
  .parse(process.argv);
 
function check(program)
{
	switch (true) {
		case program.localport:
		case program.remoteserver:
		case program.server:
		case program.remoteport:
		case program.directory:
			console.log('Usage: refresh ' + usage);
			return false;
		break;
	}

	return true;
}

if (!check(program)) {
	return;
}

try{
	server.create(program.server, program.localport, program.remoteserver, program.remoteport, program.directory, program.command);
}catch(err){
	console.log(err);
}