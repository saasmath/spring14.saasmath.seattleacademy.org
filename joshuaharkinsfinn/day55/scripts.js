$(document).ready(function() {
    var canvas = document.getElementById('josh');
    var context_six = canvas.getContext('2d');
    console.log(canvas);
// x:angle; b:increment; m:months; d:day;
    var y = new Date();
    var year = y.getFullYear();
    x = 0;
    b = 1;
    m = 1;
    d = 1;
// variables for the sun, earth and moon
    var imgSn = new Image();
    var imgErth = new Image();
    var imgMn = new Image();
// sketch the static images in black
    context_six.beginPath();
    context_six.arc(200, 200, 50, 0, 2 * Math.PI, false);
    context_six.closePath();
    context_six.fillStyle = 'black';
    context_six.fill();
    context_six.arc(340, 340, 20, 0, 2 * Math.PI, false);
    context_six.closePath();
    context_six.fillStyle = 'black';
    context_six.fill();
    context_six.arc(370, 370, 10, 0, 2 * Math.PI, false);
    context_six.closePath();
    context_six.fillStyle = 'black';
    context_six.fill();
// orbiting function
    function orbitting() {
        x = x + b;
        d = d + 1;
// the earth makes the full circle; year updated;
        if (x === 360) {
            x = 0;
            year = year + 1;
            m = 0;
        }
// days and months are updated
        if (x % 30 === 0) {
            m = m + 1;
            d = 1;
        }
        context_six.clearRect(0, 0, 400, 400);
// image of the sun
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();

// image of the moving earth
        var x1 = 200 + 140 * Math.sin(x * Math.PI / 180);
        var y1 = 200 + 130 * Math.cos(x * Math.PI / 180);
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();

// image of the moving moon
        var x2 = x1 + 50 * Math.sin(13 * x * Math.PI / 180);
        var y2 = y1 + 50 * Math.cos(13 * x * Math.PI / 180);
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();

// year, month and day updated
        context_six.font = '12pt Calibri';
        context_six.fillStyle = 'red';
        context_six.fillText('Year: ' + year, 30, 30);
        context_six.fillStyle = 'green';
        context_six.fillText('Month: ' + m, 30, 50);
        context_six.fillStyle = 'blue';
        context_six.fillText('Day: ' + d, 30, 70);
    }
});
