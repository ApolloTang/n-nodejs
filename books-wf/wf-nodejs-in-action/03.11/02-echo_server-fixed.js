// fixed with help of
// http://stackoverflow.com/questions/16903844/node-js-net-events-dont-fire

var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, socket) {
    console.log('onJoint:id: ', id );

    this.clients[id] = socket;

    console.log('key on clients: ', Object.keys( this.clients) ) // <-- list all clients id key

    this.subscriptions[id] = function(senderId, message) {
        console.log('subscriptions()', id, senderId)

        if (id != senderId) {
            this.clients[id].write(message);
        }
    }

    this.on('broadcast', this.subscriptions[id]);
});

var server = net.createServer(function ( socket) {

    var id = socket.remoteAddress + ':' + socket.remotePort;

    console.log('a new connection was made, id:', id);

    channel.emit('join', id, socket);

    socket.on('data', function(message) {
        channel.emit('broadcast', id, message.toString());
    });
});

server.listen(8888);


