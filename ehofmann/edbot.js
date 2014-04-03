$(document).ready(function() {

    $('body').keydown(function(event) {
        console.log(event.which);
        if (event.which === 38) //up arrow
        {
            console.log("up arrow");
            sendCommand('145,0,50,0,50');
        }

        if (event.which === 39) //right arrow
        {
            console.log("right arrow");
            sendCommand('145,255,206,0,50');
        }

        if (event.which === 40) //down arrow
        {
            console.log("down arrow");
            sendCommand('145,255,206,255,206');
        }




        if (event.which === 87) //W key
        {
            console.log("W key");
            sendCommand('145,0,250,0,250');
        }



        if (event.which === 68) //d key
        {
            console.log("d key");
            sendCommand('145,0,250,0,150');
        }

        if (event.which === 37) //left arrow
        {
            console.log("left arrow");
            sendCommand('145,0,50,255,206');
        }

        if (event.which === 70) //w - move forward fast
        {

            console.log("forward");

            sendCommand('145,0,50,0,50');
        }

        if (event.which === 52) //4 Play song 4
        {
            sendCommand('140,0,6,62,62,61,33,54,9,59,12,59,12,55,70,141,0');
        }

        if (event.which === 83) //s - move backwards fast
        {

            console.log("s key");

            sendCommand('145,255,06,255,06');

        }

        if (event.which === 65) //a -- turn left
        {
            sendCommand('145,0,150,0,250');
        }

        if (event.which === 49) //1 Play Song1
        {
            sendCommand('140,0,2,55,10,67,15,141,0');
        }

        if (event.which === 50) //2 Play Song 2
        {
            sendCommand('140,0,3,60,20,72,15,84,10,141,0');
        }

        if (event.which === 73) //i go extremely fast
        {
            sendCommand('145,1,144,1,144');
        }

        if (event.which === 51) //3 Play song 3
        {
            sendCommand('140,0,3,60,20,72,15,84,10,141,0');
        }
        if (event.which === 90) //z key  STOP
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
        if (event.which === 75) //k go extremely fast backwards
        {
            sendCommand('145,254,6,254,6');
        }
        if (event.which === 74) //j go extremely fast and spin
        {
            sendCommand('145,1,144,254,06');
        }
        if (event.which === 76) //l go extremely fast and spin
        {
            sendCommand('145,254,6,1,144');
        }
    });


    $("#nexus7").attr("src", "http://10.48.102.132:8080/video");
});


