var irobot = require('./index');
var robot = new irobot.Robot('/dev/ttyUSB0');
//var robot = new irobot.Robot('/dev/ttyO0');
var io = require('socket.io').listen(3001);
io.set('log level', 1); // reduce logging
 
robot.on('sensordata', function (data) {
        //console.log(data);
        io.sockets.emit('sensordata', data);
});
 
 
io.sockets.on('connection', function (socket) {
 
        socket.on('drive', function (data) {
                console.log("drive",data);
                robot.drive(data);
        });
 
        socket.on('sing', function (data) {
                console.log("sing",data);
                robot.sing(data);
        });
 
        socket.on('safemode', function () {
                console.log("safemode");
                robot.safeMode();
        });
        socket.on('fullmode', function () {
                console.log("fullmode");
                robot.fullMode();
        });
 
});