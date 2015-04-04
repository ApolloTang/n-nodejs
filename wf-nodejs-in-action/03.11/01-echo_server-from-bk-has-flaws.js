var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};
channel.on('join', function(id, client) {
    console.log('onJoint');
    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message) {
        console.log('subscriptions',  id)
        if (id != senderId) {
            this.clients[id].write(message);
        }
    }
    this.on('broadcast', this.subscriptions[id]);
});

var server = net.createServer(function (client) {
    var id = client.remoteAddress + ':' + client.remotePort;
    client.on('connect', function() {
        console.log('on Connect', id, client);
        channel.emit('join', id, client);
    });
    client.on('data', function(data) {
        console.log('onData', data, id);

        data = data.toString();
        channel.emit('broadcast', id, data);
    });
});
server.listen(8888);


// Can't get this example to work:
// Some one had ask about the same problem i have on stack overflow:
// http://stackoverflow.com/questions/16903844/node-js-net-events-dont-fire
//
