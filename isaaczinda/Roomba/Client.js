var net = require('net');
var HOST = '10.48.102.173';
var PORT = 443;


var socket = new net.Socket();

socket.connect(PORT, HOST, function()
{
  console.log("Socket connected.");

  Objects = {"Command": "Drive", "Arguments": {"Left": 0, "Right": 10}};
  socket.write(JSON.stringify(Objects));
});

socket.on('data', function(data) 
{
  console.log('Recieved: ' + data);
});

socket.on('close', function() 
{
    console.log('Connection closed');
});

socket.on('error', function(exception)
{
  console.log('Exception: ' + exception);
});

