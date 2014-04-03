
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Gary Bot</title>
        <script src="jstick.js" type="text/javascript"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="http://saasmath.seattleacademy.org/css/bootstrap.css" rel="stylesheet">
        <link href="http://saasmath.seattleacademy.org/garyanderson/days/garybot.css" rel="stylesheet">

        <script src="http://saasmath.seattleacademy.org/js/jquery.js"></script>
        <script src="edbot.js"></script>


        <script>
            
            var extend = function(a,b){ for (var i in b) a[i] = b[i]; return a; };
var shallowClone = function(o){ return extend({}, o); };
var noop = function(){};

var Point = function(x,y){
    this.x = x;
    this.y = y;
    this.toString = function(){
        return "x:"+this.x+",y:"+this.y;
    };
};


var JStick = function(opts){

    var bind = function(joystick){
        joystick.settings.target.addEventListener('mousedown',function(ev){
            if (joystick.enabled && ev.button == 0){
                joystick.activateAt({x: ev.pageX, y: ev.pageY});
            }
        });
        document.addEventListener('mouseup', function(){
            if (joystick.enabled){
                joystick.release();
            }
        });
        document.addEventListener('mousemove', function(ev){
            if (joystick.enabled){
                joystick.dragTo({x: ev.pageX, y: ev.pageY});
            }
        });
    };

    var diff = function(dimension){
        return function(sensitivity){
            var inversion = (( this.settings.invertY && dimension == 'y') ? -1 : 1);
            return (this.now[dimension] - this.start[dimension])
                   / (sensitivity ? Math.pow(10,sensitivity) : 1) * inversion;
        }
    };

    var defaults = {
        target: document,
        invertY: true,
        onrelease: noop,
        onactivate: noop,
        ondrag: noop
    };

    var settings = extend(defaults, opts);

    var joystick = extend(this, {
        settings: settings,
        enabled: true,
        active: false,
        start: new Point(0,0),
        now: new Point(0,0),
        activateAt: function(position){
            this.start = new Point(position.x, position.y);
            this.active = true;
            this.settings.onactivate.apply(joystick);
        },
        release: function(){
            var wasActive = this.active;
            this.active = false;
            if (wasActive) this.settings.onrelease.apply(joystick);
        },
        dragTo: function(position){
            this.now.x = position.x;
            this.now.y = position.y;
            if (this.active) this.settings.ondrag.apply(joystick);
        },
        moveTo: function(offset){
            this.now.x = this.start.x + offset.x;
            this.now.y = this.start.y + (offset.y * (this.settings.invertY ? -1 : 1));
        },
        dx: diff('x'),
        dy: diff('y')
    });

    bind(joystick);

    return joystick;
};
            function sendCommand(bytestring) {
                if (bytestring == undefined)
                    bytestring = '';
                command = 'http://saasmath.seattleacademy.org/saasbot/writebot.php?';
                command = command + 'botname=' + $('#botname').val();
                command = command + '&bytestring=' + bytestring;
                $.getJSON(command, function(json) {
                    $('#result').text(JSON.stringify(json, null, 4));
                });

            }
            function sleep(milliseconds) {
                var start = new Date().getTime();
                for (var i = 0; i < 1e7; i++) {
                    if ((new Date().getTime() - start) > milliseconds) {
                        break;
                    }
                }
            }
            
            function beepOnHit(){
                sendCommand('');
                sensors = $.parseJSON($('#result').text());
                leftBumper = sensors.BUMPS_AND_WHEEL_DROPS.charAt(7);
                console.log(leftBumper);
                if(leftBumper == 1){
                   sendCommand('140,0,2,55,10,67,15,141,0');
                }
            }
            
            
            
            $(document).ready(function() {

                var getSensors = setInterval(function() {
                    sendCommand('');
                }, 1000);

                $("[data-command]").click(function(event) {
                    command = $(this).data('command');
                    sendCommand(command);
                });

                $('#beephit').change(function() {
                    if(this.checked)
                        checkHit = setInterval(beepOnHit,1000);
                    else
                        clearInterval(checkHit);
                });

            });

        </script>
    </head>

    <body>
        
	<div id="target" style="width:100px;height:100px;border:1px solid black;cursor:crosshair;"></div>
	<div>drag around</div>
	<div>sensitivity: <input id="sensitivity" type="number" value="2"/></div>
    <div id="output" style="width:200px; border:1px solid grey;"></div>

	<script type="text/javascript">

	    var jstick = new JStick({
	        target: document.getElementById('target'),
	        ondrag: function(){
	        	var sensitivity = document.getElementById('sensitivity').value;
	            document.getElementById('output').innerHTML = jstick.dx(sensitivity) + " , " + jstick.dy(sensitivity);
	        }
	    });
	
	</script>

        <div class="container">
            <h3>Robot Control</h3>
            <div class="row">
                Select Robot: 
                <select id = "botname" name="botname">
                    <option>10.48.102.162</option>
                    <option>10.48.102.178</option>
                    <option>10.48.102.115</option>
                    <option>10.48.102.136</option>
                    <option>10.48.102.113</option>
                    <option>10.48.102.130</option>
                    <option>10.48.102.172</option>
                </select>
            </div>
            <div class ="row">
                <button data-command = "128" class="btn-success btn col-xs-2">Passive Mode</button>
                <button data-command = "131" class="btn-warning btn col-xs-2">Safe Mode</button>
                <button data-command = "132" class="btn-danger btn col-xs-3">Full Mode</button>
            </div>
            <div class ="row">
                <div class="col-xs-3">
                    <button data-command = "145,0,0,0,0" class="btn-danger btn-lg btn-block">Stop</button>
                    <button data-command = "145,0,50,0,50" class="btn-primary btn-lg btn-block">forward</button>
                    <button data-command = "145,255,216,255,216" class="btn-primary btn-lg btn-block">back</button>
                    <button data-command = "145,0,50,0,0" class="btn-primary btn-lg btn-block">left</button>
                    <button data-command = "145,0,0,0,50" class="btn-primary btn-lg btn-block">right</button>
                    <button data-command = "145,1,50,1,50,155,70,145,0,50,1,150,155,20,145,1,50,1,50,155,70,145,0,0,0,0" class="btn-primary btn-lg btn-block">special</button>
                    <button id ="wimp" class="btn-primary btn-lg btn-block">Wimp</button>
                    <input type="checkbox" id="beephit">
                </div>
            </div>
            <div class="alert alert-info wordwrap" id="result">Sensors ...</div>
        </div> <!-- end container -->

    </body>
</html>

    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
    </head>
    <body>
        <div>TODO write content</div>
    </body>
</html>
