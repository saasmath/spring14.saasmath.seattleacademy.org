var net = require('net');
var HOST = '10.48.102.179';
//10.48.102.179: ROOMBA
//172.16.20.201: SAASMATH
var PORT = 443;

var socket = new net.Socket();

socket.connect(PORT, HOST, function()
{
  socket.write('Hello World...');
});

socket.on('data', function(data) 
{
  console.log('Recieved: ' + data);
  // Close the client socket completely
  //    client.destroy();
});

socket.on('close', function() 
{
    console.log('Connection closed');
});

socket.on('error', function(exception)
{
  console.log('Exception: ' + exception);
});