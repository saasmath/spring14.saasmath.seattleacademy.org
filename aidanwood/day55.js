function disForm(x1, y1, x2, y2)
{
    return Math.sqrt(((x2-x1)^2) + ((y2-y1)^2));
}

function disCheck(cx1, cy1, cr1, cx2, cy2, cr2)
{
    if(disForm(cx1, cy1, cx2, cy2) < cr1+cr2)
    {
        return true;
    }
}

var locBalls = new Array();

var ballNumber = 5;

function locStore(number, x, y)
{
    var nx;
    var ny;
    nx = number + 2^number;
    ny = number + 2^(number + 1);
    locBalls[nx] = x;
    locBalls[ny] = y;
}

function startSetup()
{
    for(var i = 0; i < locBalls.length; i++){
        locBalls[i] = 300;
    }  
}

