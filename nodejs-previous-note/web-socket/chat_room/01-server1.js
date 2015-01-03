var io = require('socket.io'),
  connect = require('connect');

var app = connect().use(connect.static('public1')).listen(3000);
var socket = io.listen(app);
