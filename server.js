var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('Server Running...');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection',(sockets) => {
  connections.push(socket);
  console.log('connected: %s sockets connected', connections.length);

// disconnect
socket.on('disconnect',function(socket){
  connections.splice(connections.indexOf(socket),1);
  console.log('Dissconnected: %s sockets connected', connections.length);
    });
    // send message 
    socket.on('send message', function(title, description){
      io.sockets.emit('new message', {title: title,
        description: description});
    })
});