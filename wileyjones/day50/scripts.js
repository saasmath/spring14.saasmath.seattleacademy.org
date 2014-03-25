$(document).ready(function() {
    function addUpHomePoints(itemClicked) {
        var twopoints = $(itemClicked).parent().children(".hometwopoint").text();
        var threepoints = $(itemClicked).parent().children(".homethreepoint").text();
        var freethrows = $(itemClicked).parent().children(".homefreethrow").text();
        $(itemClicked).parent().children(".playerpoints").text(twopoints * 1 + threepoints * 1 + freethrows * 1);
    }
    $('.court').click(function(event) {
        $('<div class="shot">x<div/>').appendTo(this)
                .css('top', event.offsetY)
                .css('left', event.offsetX);
    });

    $('.hometwopoint').click(function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 2);
        //console.log($(this).parent().children(".hometwopoint").text());
        addUpHomePoints(this);

    });

    $('.homethreepoint').click(function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 3);
        addUpHomePoints(this);

    });

    $('.homefreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 1);
        addUpHomePoints(this);

    });

    $('.awaytwopoint').click(function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 2);
    });

    $('.awaythreepoint').click(function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 3);
    });

    $('.awayfreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 1);
    });

    

var timer = document.getElementById("timer");
                    var start = document.getElementById("start");
                    var startPoint = document.getElementById("seconds");
                    var userControl = document.getElementById("userControl");
                    var userInterfere = document.getElementById("interfereButton");
                    var pause = document.getElementById("pause");
                    var stop = document.getElementById("stop");

                    var timerHandle;
                    var tempValue;

                    function checkState(){
                        if (timer.innerHTML == "0:00"){
                            userControl.style.display = "block";
                            userInterfere.style.display = "none";
                            timer.style.color = "black";
                        } else {
                            userControl.style.display = "none";
                            userInterfere.style.display = "block";
                        }
                    }

                    function activate(x){
                        var min = x.split(":")[0];
                        var sec = x.split(":")[1];

                        if(min >= 0){
                            sec--;
                            if(sec < 0){
                                sec = 59;
                                min--;
                                if(min < 0) {
                                    sec = "00" ;
                                    min = 0 ;               
                                    clearInterval(timerHandle);
                                }           
                            } else if(sec < 10) {
                                sec = "0" + sec;
                                timer.style.color = "red";          
                            }
                            timer.innerHTML = min + ":" + sec ;
                        } else {
                            clearInterval(timerHandle);
                        }   

                        checkState();
                    }


                    start.onclick = function() {
                        if(!isNaN(startPoint.value)){
                            timer.innerHTML= startPoint.value + ":00" ;
                            userControl.style.display = "none";
                            userInterfere.style.display = "block";
                            timerHandle = setInterval("activate(timer.innerHTML)" , 1000);
                        } else {
                            alert("Sorry, only numerical values are allowed.");
                        }
                    }

                    pause.onclick = function() {
                        if(pause.innerHTML == "Pause"){
                            tempValue = timer.innerHTML;
                            clearInterval(timerHandle);
                            pause.innerHTML = "Resume";
                        } else if(pause.innerHTML == "Resume"){
                            timerHandle = setInterval("activate(tempValue)" , 1000);
                            pause.innerHTML = "Pause";
                        }
                    }

                    stop.onclick = function(){
                        clearInterval(timerHandle);
                        timer.innerHTML = "0:00";
                        checkstate();   
                    }

                    window.onload = function(){
                        userInterfere.style.display = "none";
                    }   

});