
<!DOCTYPE html>
<html>
    <head>
        <title>Day 77</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min.js"></script>
 
        <script>
  mysong1 =  
   [[880.0, 300],
    [587.3, 600],
    [698.5, 300],
    [880.0, 300],
    [587.3, 300],
    [698.5, 150],
    [880.0, 150],
    [1046.5, 300],
    [987.8, 600],
    [784.0,300],
    [698.5,150],
    [784.0,150],
    [880.0,300],
    [587.3,300],
    [523.3,150],
    [659.3,600],
     [587.3,600]];
 
 
          mysong2 =  
   [[523.3, 600],
    [784.0, 600],
    [830.6, 600],
    [523.3, 600],
    [784.0, 150],
    [784.0, 150],
    [784.0, 150],
    [523.3, 150],
    [523.3, 150],
    [523.3, 150],
     [784.0, 150],
     [784.0, 150],
    [830.6, 600],
    [523.3, 600],
    [784.0, 600],
    [830.6,600],
    [523.3,300],
    [784.0,300],
    [784.0,300],
    [784.0,300],
    [523.3,300],
     [523.3,300],
      [523.3,300],
      [784.0,300],
      [784.0,75],
     [830.6,300]];
 
            $(document).ready(function() {
                var socket = io.connect('http://10.48.102.113:3001');
                socket.on('sensordata', function(data) {
                    //console.log(data);
                    $("#voltage").text(data.battery.voltage.volts);
                    $("#left").text(data.cliff_sensors.left.signal.raw);
                    $("#front_left").text(data.cliff_sensors.front_left.signal.raw);
                    $("#front_right").text(data.cliff_sensors.front_right.signal.raw);
                    $("#right").text(data.cliff_sensors.right.signal.raw);
                    //$("#allsensors").text(JSON.stringify(data));
                    socket.emit('sensorswritten');
                });
 
 
                $("#forward").click(function(e) {
                    console.log('forward');
                    socket.emit('drive', {left: 15, right: 15});
                });
 
                $("#halt").click(function(e) {
                    console.log('halt');
                    socket.emit('drive', {left: 0, right: 0});
                });
                $("#mysong1").click(function(e) {
                    socket.emit('sing', mysong1);
                });
 
                $("#mysong2").click(function(e) {
                    socket.emit('sing', mysong2);
                });
 
                $("#safeMode").click(function(e) {
                    socket.emit('safeMode');
                });
 
                $("#fullMode").click(function(e) {
                    socket.emit('fullMode');
                });
 
 
                $('body').keydown(function(event) {
                    console.log(event.which);
                    speed = $("#speed").text();
                    //speed = 100;
                    if (event.which === 87) //w - move forward
                    {
                        speed = $("#speed").text();
                        speed = speed * 1 + 50;
                        $("#speed").text(speed);
                        socket.emit('drive', {left: speed, right: speed});
 
                    }
 
                    if (event.which === 83) //s - move backward
                    {
                        speed = $("#speed").text();
                        speed = speed * 1 - 50;
                        $("#speed").text(speed);
                        socket.emit('drive', {left: speed, right: speed});
                    }
 
                    if (event.which === 65) //d - move right
                    {
                        speed = $("#speed").text();
                        speed = 150;
                        $("#speed").text(speed);
                        socket.emit('drive', {left: speed, right: -speed});
 
                    }
 
                    if (event.which === 68) //a - move left
                    {
                        speed = $("#speed").text();
                        speed = 150;
                        $("#speed").text(speed);
                        socket.emit('drive', {left: -speed, right: speed});
                    }
 
                    if (event.which === 32) //space - stop
 
                    {
                        speed = $("#speed").text();
                        speed = 0;
                        $("#speed").text(speed);
                        socket.emit('drive', {left: speed, right: speed});
                    }
                });
 
            });
        </script>
 
    </head>
    <body>
        <div class="container">
            <div class="row">
                <button id="forward">forward</button>
                <button id="halt">halt</button>
                <button id="mysong1">Victory song 1</button>
                <button id="mysong2">Victory Song 2</button>
                <button id="safeMode">safeMode</button>
                <button id="fullMode">fullMode</button>
                Voltage  <span id="voltage">...</span>
 
            </div>
            <div>speed:<span id="speed">100</span></div>
            <div>left  <span id="left">...</span>
                front_left  <span id="front_left">...</span>
                front_right <span id="front_right">...</span>
                right  <span id="right">...</span>
            </div>
            <div id="allsensors">...</div>
        </div>
    </body>
</html>



