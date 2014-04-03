$(document).ready(function() {

    $('body').keydown(function(event) {
        console.log(event.which);
        if (event.which === 66) //b - move forward
        {
            console.log("goback!");
            sendCommand('145,255,216,255,216');
        }
        if (event.which === 66) //b - move forward
        {
            console.log("turnright!");
            sendCommand('145,255,216,0,50');
        }
        if (event.which === 66) //left-arrow - move forward
        {
            console.log("turnleft!");
            sendCommand('145,0,50,255,216');
        }
        if (event.which === 70) // - move forward
        {
         
            console.log("forward");
   if (event.which === 66) //up-arrow - move forward
        {
            console.log("gofast!");
            sendCommand('145,1,244,1,244');
        }
            sendCommand('145,0,50,0,50');

        }

        if (event.which === 65) //a -- turn left
        {
            sendCommand('145,0,50,255,206');
        }

        if (event.which === 49) //1 Play Song1
        {
            sendCommand('140,0,2,55,10,67,15,141,0');
        }

        if (event.which === 50) //2 Play Song 2
        {
            sendCommand('140,0,3,60,20,72,15,84,10,141,0');
        }

        if (event.which === 51) //3 Play song 3
        {
            sendCommand('140,0,3,60,20,72,15,84,10,141,0');
        }
        if (event.which === 32) //space bar STOP
        {
            sendCommand('145,0,0,0,0');
        }

        if (event.which === 80) //p Passive Mode
        {
            sendCommand('128');
        }

        if (event.which === 70) //f full Mode
        {
            sendCommand('132');
        }

        if (event.which === 83) //s Safe Mode
        {
            sendCommand('131');

        }

    });

});