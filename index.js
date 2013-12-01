var http = require('http'),
	static = require('node-static'),
	files = new static.Server('./public');

http.createServer(function(req, res) {
	// res.writeHead(200, {
	// 	'content-Type': 'text/plain'
	// });
	// res.end('Hello Node!');
	req.addListener('end', function() {
		files.serve(req, res);
	}).resume();
}).listen(7878);