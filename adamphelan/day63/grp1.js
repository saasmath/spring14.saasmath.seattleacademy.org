// get references to the canvas and its context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var $canvas = $("#canvas");

// get the canvas position on the page
// used to get mouse position
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();
ctx.lineWidth = 3;

// save info about each circle in an object
var circles = [];
var selectedCircle = -1;

// the html radio buttons indicating what action to do upon mousedown
var $create = $("#rCreate")[0];
var $select = $("#rSelect")[0];
var $move = $("#rMove")[0];

// draw all circles[]
function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < circles.length; i++) {
        var c = circles[i];
        ctx.beginPath();
        ctx.arc(c.cx, c.cy, c.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = c.color;
        ctx.fill();
        // if this is the selected circle, highlight it
        if (selectedCircle == i) {
            ctx.strokeStyle = "red";
            ctx.stroke();
        }
    }
}

function handleMouseDown(e) {
    e.preventDefault();
    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetY);

    if ($create.checked) {
        // create a new circle a the mouse position and select it
        circles.push({
            cx: mouseX,
            cy: mouseY,
            radius: 10,
            color: randomColor()
        });
        selectedCircle = circles.length - 1;
    }
    if ($select.checked) {
        // unselect any selected circle
        selectedCircle = -1;
        // iterate circles[] and select a circle under the mouse
        for (var i = 0; i < circles.length; i++) {
            var c = circles[i];
            var dx = mouseX - c.cx;
            var dy = mouseY - c.cy;
            var rr = c.radius * c.radius;
            if (dx * dx + dy * dy < rr) {
                selectedCircle = i;
            }
        }
    }
    if ($move.checked && selectedCircle >= 0) {
        // move the selected circle to the mouse position
        var c = circles[selectedCircle];
        c.cx = mouseX;
        c.cy = mouseY;
    }

    // redraw all circles
    drawAll();
}

// return a random color
function randomColor() {
    return ('#' + Math.floor(Math.random() * 16777215).toString(16));
}

// handle mousedown events
$("#canvas").mousedown(function (e) {
    handleMouseDown(e);
});


