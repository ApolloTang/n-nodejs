// fixed with help of
// http://stackoverflow.com/questions/16903844/node-js-net-events-dont-fire

var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.connections = {};
channel.subscriptions = {};

channel.on('addConnection', function(id, socket) {
    this.connections[id] = socket;

    this.subscriptions[id] = function(publisherId, message) {
        if (id != publisherId) {
            this.connections[id].write(message);
        }
    };

    // each time this call back run a new callback (subscriptions[id])
    // is added to the event 'broadcast'
    this.on('broadcast', this.subscriptions[id] );

    // list all ref to console
    console.log('connections: ', Object.keys( this.connections) );
    console.log("broadcast's callback: ", Object.keys( this.subscriptions ) );
});

channel.on('closeConnection', function(id){
    // remove the callback "this.subscriptions[id]" from 'broadcast event
    channel.removeListener('broadcast', this.subscriptions[id] );

    // broadcast that this socket id has disconnected
    channel.emit('broadcast', id, id+' has closed');

    // remove references to closed socket and callback
    delete this.connections[id];
    delete this.subscriptions[id];

    // list all ref to console (you will see there now one less)
    console.log('connections: ', Object.keys( this.connections) );
    console.log('subscriptions: ', Object.keys( this.subscriptions ) );
})

var server = net.createServer(function ( socket) {
    var id = socket.remoteAddress + ':' + socket.remotePort;

    console.log('a new connection was made, id:', id);

    socket.on('close', function(){
        console.log('socket ' + id + ' has closed');
        channel.emit('closeConnection', id);
    })

    channel.emit('addConnection', id, socket);

    socket.on('data', function(message) {
        channel.emit('broadcast', id, message.toString());
    });
});

server.listen(8888);


