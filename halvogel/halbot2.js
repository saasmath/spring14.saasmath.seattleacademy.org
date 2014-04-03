$(document).ready(function() {

    $('body').keydown(function(event) {
        console.log(event.which);
        if (event.which === 38) //up arrow - move forward
        {
            console.log("goforward");
            sendCommand('145,1,244,1,244');
        }
        
         console.log(event.which);
        if (event.which === 40) //down arrow - move backward
        {
            console.log("goback");
            sendCommand('145,255,216,255,216');
        }
        
          console.log(event.which);
        if (event.which === 39) //right arrow - move right
        {
            console.log("goright");
            sendCommand('145,254,12,1,244');
        }
        
          console.log(event.which);
        if (event.which === 37) //left arrow - move left
        {
            console.log("gobleft");
            sendCommand('145,1,224,254,12');
        }
        if (event.which === 70) //w - move forward
        {
         
            console.log("forward");

            sendCommand('145,0,50,0,50');
            console.log("forwardfull");

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
        
          if (event.which === 52) //4 Play song 4
                    {
                        sendCommand('140,62,62,61,33,54,6,59,3,59,3,55,70');
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