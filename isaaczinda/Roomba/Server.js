var irobot = require('./Exports');
var robot = new irobot.Robot('/dev/ttyUSB0');

var net = require('net');
var HOST = '0.0.0.0';
var PORT = 443;

// //setup robot sending
// robot.on('bump', function (e) 
// {
//     console.log("Robot was bumped.");
//     sock.write(e);
// });

// robot.on('wheeldrop', function (e) 
// {
//     console.log("Wheels dropped down.");
//     sock.write(e);
// });

// robot.on('cliff', function (e) 
// {
//     console.log("Cliff hit.");
//     sock.write(e);
// });

//alert when the robot is ready
robot.on('ready', function () 
{
    console.log("Robot ready.");
    robot.sing(songs.START);
});

function ComputeData(Data)
{
    //convert the data into an object
    Objects = JSON.parse(Data);

    //'Command' is the command to be executed
    //'Arguments' is the data that will be used

    if(Objects.Command == "Song")
    {
        //the argument is an array
        robot.sing(Objects.Arguments);
    }
    else if(Objects.Command == "Drive")
    {
        console.log(Objects.Arguments.Left);
        robot.drive({left:Objects.Arguments.Left, right:Objects.Arguments.Right});
    }
    else
    {
        console.log("Invalid command recieved.");
    }
}

net.createServer(function(sock) 
{
    // We have a connection - a socket object is assigned to the connection automatically
    console.log(sock.remoteAddress +' has been connected on '+ sock.remotePort);

    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) 
    {
        console.log('Recieved: '+ data);
        sock.write("Reply.");
        ComputeData(data);
    });

    // Add a 'error' event handler to this instance of socket
    sock.on('error', function(exception) 
    {
        console.log(exception);
    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('Closed Connection');
    });

}).listen(PORT, HOST);

console.log('Server created.');