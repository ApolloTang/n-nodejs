var connect = require('connect');

var app = connect()
        .use(function (req, res) {
            //res.statusCode = 403;
            //res.end("Forbidden");
            res.statusCode = 500
            res.end("Internal Server Error")
	})
	.listen(3000);