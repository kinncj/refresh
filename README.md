refresh
=======
Your webdevelopment tool

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

	npm install refresh

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
	Helder Santana ( @heldr ) for supporting me at this project.


Contributing
======
Feel free to help us creating issues and PRs ;)

License
======
MIT - 2012, Kinn Coelho Julião.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
this list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation
and/or other materials provided with the distribution.

* Neither the name of Thiago Rigo nor the names of its
contributors may be used to endorse or promote products derived from this
software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.    