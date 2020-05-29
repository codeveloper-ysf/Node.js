var http = require('http');
var fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
	console.log(req.url);
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
	} else if (req.url === '/script.js') {
		res.writeHead(200, { 'Content-Type': 'text/javascript' });
		fs.createReadStream(__dirname + '/script.js', 'utf8').pipe(res);
	} else if (req.url === '/style.css') {
		res.writeHead(200, { 'Content-Type': 'text/css' });
		fs.createReadStream(__dirname + '/style.css', 'utf8').pipe(res);
	} else {
		res.writeHead(404, { 'Content-Type': 'text/html' });
		fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
	}
});

server.listen(3000); // The server listens on port 3000