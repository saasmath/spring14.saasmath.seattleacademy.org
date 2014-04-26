 var balls = [
                    {x: 50, y: 50, r: 40, v: 0, theta: 0, dx: 1, dy: 1.5, fill: 'red'},
                    {x: 200, y: 150, r: 30, v: 0, theta: 0, dx: -1, dy: 0.3, fill: 'blue'},
                    {x: 450, y: 250, r: 20, v: 0, theta: 0, dx: -0.5, dy: 3, fill: 'rgb(0,80,0)'}
                ];
                var changing = false;
                for(var i = 0; i < 20; i++)
                {
                    balls[i] = new Array();
                    balls[i].x = Math.floor(Math.random() * (1250 - 50 + 1)) + 50;
                    balls[i].y = Math.floor(Math.random() * (450 - 50 + 1)) + 50;
                    
                    if(i != 0)
                        balls[i].r = Math.floor(Math.random() * (45 - 15 + 1)) + 15;
                    else
                        balls[i].r = 75;
                    //balls[i].dx = Math.floor(Math.random() * (3 + 3 + 1)) - 3;
                    //balls[i].dy = Math.floor(Math.random() * (3 + 3 + 1)) - 3;
                    
                    if(balls[i].r >= 30 && i != 0) {
                        balls[i].dx = 1;
                        balls[i].dy = 1;
                    }
                        
                    else if(balls[i].r < 30 && i != 0) {
                        balls[i].dx = 2;
                        balls[i].dy = 2;
                    }
                    else if(i == 0) {
                        balls[i].dx = 0;
                        balls[i].dy = 0;
                    }
                    
                    
                    
                    
                    if(balls[i].r >= 30 && i != 0)
                        balls[i].fill = "red";
                    else if(balls[i].r < 30 && i != 0)
                        balls[i].fill = "rgb(0,80,0)";
                    else if(i == 0)
                        balls[i].fill = "blue";
                        
                    
                    
                    
                    //var random = Math.floor(Math.random()*(3 - 1 + 1)) + 1;
                    //if(random == 1)
                        //balls[i].fill = "red";
                    //else if(random == 2)
                        //balls[i].fill = "blue";
                    //else
                        //balls[i].fill = "rgb(0,80,0)";
                        
                        
                    
                    
                         
                  //  if(balls[i].r >= 250)
                    //    location.reload();
                    
                }
                var Planets = [
                    {x: 500, y: 250, r: 50, color: "red", gravity: 24.79}
                ]
                function makePlanet(x, y, r, color, gravity)
                {

                }
                
                