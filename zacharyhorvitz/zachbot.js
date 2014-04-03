var speed = 0;
var speed1 = 0;
var maxeds = false;
$(document).ready(function() {
    $('body').keydown(function(event) {
        console.log(event.which);
        if (event.which === 66) //w - move forward
        {
            console.log("goback");
            sendCommand('145,255,216,255,216');
        }
        if (event.which === 77) //m - move forward
        {
         
            console.log("forward");

            var sendstring = '145,' +  speed1 + ',' + speed + ',' + speed1 + ',' + speed;
            
            sendCommand(sendstring);
    
        }
        if (event.which == 75) //k
           {
               sendCommand('145,0,0,0,0'); //Stop
           }
         
        if (event.which === 65) //a -- turn left
        {
            sendCommand('145,0,50,255,206');
        }

        if (event.which === 54) //6 to accelerate
        {
            
            if (speed > 250 && maxs != true)
                {
                     maxs = true;
                     speed = 0;
                     speed1 = 1;
                   
              
                }
                else if(speed > 250 && speed1 == 1)
                {
                  //do nothing
                }
                else
                {
                    
                     speed = speed + 10;
                   
                }
             console.log(speed + ',' + speed1);
        }

       
        if (event.which === 51) // DESTROY
        {
            sendCommand('144,0,0, 128');
            console.log("HI");
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