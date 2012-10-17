refresh
=======
Your webdevelopment tool

[![Youtube video](http://img.youtube.com/vi/6A1HdK7iHVM/0.jpg)](http://www.youtube.com/watch?v=6A1HdK7iHVM)

About
======
A tool(proxy) that refreshes your browser based on filesystem notifications.

With refresh, you can have live updates from your web server based on your filesystem updates.

Motivation and decision
======

* Motivation
	* I really love some Mac editors that give me live preview when I'm coding some PHP stuff.

	* But I'm not always on Mac, so I decide to create this to help my work at Linux too... this way I can get the "live preview" resource with any editor/IDE.

	* Learn new things.

* Decision
	* At first time I knew that I would need some "socket" interaction to tell my browser: "Refresh please...".
	* So, when I think about socket, "daemons", "remote interactions" and "web browsers" I think node.
	* This way I started a new saga to learn and finish this "app" in the past 1 day.


Usage
======

	npm install -g refresh (it may require root privileges)

	refresh -s 127.0.0.1 -p 1337 -r http://localhost -t 80 -d /var/www
	refresh -h
	refresh --server 127.0.0.1 --localport 1337 --remoteserver http://localhost --remoteport 80 --directory /var/www

Roadmap
======
- Automated tests

- Command executer for every filesystem notification

	example:

	refresh -s 127.0.0.1 -p 1337 -r http://localhost -t 80 -d /var/www -c "phpunit tests/unit/"

	this way developers can trigger commands for every filesystem update

Thanks
======
Modules:

	http-proxy (that I updated and used for this project, inside lib folder).
	commander
	inotify
	pkginfo
	socket.io

Special thanks for:
	Helder Santana ( [@heldr](http://github.com/heldr) ) for supporting me at this project.


Contributing
======
Feel free to help us creating issues and PRs ;)

License - MIT
======
Copyright 2012 Kinn Coelho Julião and other contributors
http://kinncj.com.br/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  