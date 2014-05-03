window.onload = function() {
    //var canvas = document.getElementById("canvas"),
            ctx = canvas.getCxt("2d"),
            width = canvas.width = window.innerWidth,
            height = canvas.height = window.innerHeight,
            arrowX = width / 2,
            arrowY = height / 2,
            dx, dy,
            angle = 0,
            a = 0;

    render();

    function render() {
        arrowX = width / 2 + Math.cos(a) * height * .4;
        arrowY = height / 2 + Math.sin(a) * height * .4;
        a += .01;
        context.clearRect(0, 0, width, height);

        context.save();
        context.translate(arrowX, arrowY);
        context.rotate(angle);


        context.restore();
        requestAnimationFrame(render);
    }

    document.body.addEventListener("click", function(event) {
        dx = event.clientX + balls[0].dx;
        dy = event.clientY + balls[0].dy;
        angle = Math.atan2(dy, dx);
    });


};




