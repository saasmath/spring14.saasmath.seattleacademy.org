var irobot = require('./index');
var robot = new irobot.Robot('/dev/ttyO0');
mysong =
        [
            [392, 600],
            [392, 600],
            [392, 600],
            [311.1, 450],
            [466.2, 200],
            [392, 600]
        ];
 
robot.on('ready', function() {
    robot.sing(mysong);
    console.log('READY');
});
 
robot.on('button', function (e) {
    console.log('BUTTON', e);
    if(e.advance && e.play){
        robot.fullMode();
        return;
    }
 
    if(e.play && !e.advance ){
        robot.safeMode();
        return;
    }
 
    if (!e.play && e.advance) {
        console.log(robot._sensorData);
        return;
    }
 
});
 
robot.on('bump', function(e) {
    console.log('BUMP', e);
    if (e.both) {
        robot.drive({left: 10, right: 10});
        robot._sendCommand(irobot.commands.WaitTime, 20);
        robot.drive({left: 0, right: 0});
        return;
    }
    if (e.left) {
        robot.drive({left: -10, right: 10});
        robot._sendCommand(irobot.commands.WaitTime, 20);
        robot.drive({left: 0, right: 0});
        return;
    }
    if (e.right) {
        robot.drive({left: 10, right: -10});
        robot._sendCommand(irobot.commands.WaitTime, 20);
        robot.drive({left: 0, right: 0});
        return;
    }
 
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


