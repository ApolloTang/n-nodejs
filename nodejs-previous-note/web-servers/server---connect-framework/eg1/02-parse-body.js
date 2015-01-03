var connect = require('connect');

var app = connect()
	.use(connect.bodyParser())
	.use(connect.static('public2'))
	.use(function (req, res) {
		if (req.url === '/process') {
			res.end(req.body.name + ' would repeat ' + req.body.repeat + ' times.');
		} else {
			res.end("Invalid Request");
		}
	})
	.listen(3000);
