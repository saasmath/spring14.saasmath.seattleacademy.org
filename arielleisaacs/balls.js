var ball = {
	x: 5,
	y: 5,
	dx: 20,
	dy: 20,
	r: 4,
	v: 1,
	theta: 0,
        fill: "rgb(000000)",
	

	create: function(x, y, r, dx, dy, v, theta, fill) {
		var obj = Object.create(this);
		obj.x = x;
		obj.y = y;
		obj.dx = dx;
		obj.dy = dy;
		obj.r = r;
		obj.v = v;
		//obj.theta = theta;
                obj.fill = fill;
		return obj;
	}

};