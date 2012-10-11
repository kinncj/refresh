#!/usr/bin/env node


var program = require('commander');
var server  = require('./lib/server');
var usage   = '-s <localhost> -p <1337> -r <localhost> -t<80> -d </var/www/kinncj>';
program
  .version('0.0.1')
  .usage(usage)
  .option('-s, --server <server> -no-', 'Specify the local server', 'localhost')
  .option('-p, --localport <localport> -no-', 'Local port', '1337')
  .option('-r, --remoteserver <remoteserver> -no-', 'Remote Server', 'localhost')
  .option('-t, --remoteport <remoteport> -no-', 'Remote server port', '80')
  .option('-d, --directory <directory> -no-', 'Directory to watch', '/tmp')
  .parse(process.argv);
require('shelljs/global');
var os = require('os');
var sys = require('sys');
 
var os_type = os.type();
var installed = [];
var not_installed = [];
 
var deps = {
  php :  ''
};
 
if(os_type == "Linux") {
  //This is Linux so remove Mac deps.
  delete deps['clang'];
  delete deps['brew'];
}
 
for(var dep in deps) {
  if (!which(dep)) {
    not_installed.push(dep);
  }
  else{
    if(deps[dep]){
      var version = exec(dep +' -v', {silent:true}).output;
      console.log(version);
      console.log(deps[dep]);
      if(version.search(deps[dep]) == -1){
        not_installed.push(dep); // Installed, but version mismatch.
      }
    }
    else{
      installed.push(dep);
    }
  }  
}
if (not_installed == 'php') {
	return console.log("Missed system dependencies: "+not_installed );
}
function check(program)
{
	switch (true) {
		case program.localport:
		case program.remoteserver:
		case program.server:
		case program.remoteport:
		case program.directory:
			console.log('Usage: refresh '+usage);
			return false;
		break;
	}
	return true;
}

if (!check(program)) {
	return;
}
try{
server.create(program.server, program.localport, program.remoteserver, program.remoteport, program.directory);
}catch(err){

}