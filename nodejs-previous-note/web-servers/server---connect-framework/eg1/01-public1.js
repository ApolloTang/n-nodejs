var connect = require('connect');

var app = connect()
	.use(connect.static('public1'))
	.use(function (req, res) {
        // arrive here if file does not exist in 'public1' folder
		res.end("Couldn't find it.");
	})
	.listen(3000);
