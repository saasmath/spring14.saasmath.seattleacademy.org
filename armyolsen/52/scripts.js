$(document).ready(function() { 

  $(function() {

                    // Setup the timer
                    $countdown = $('#countdown');
                    Example2.Timer = $.timer(updateTimer, incrementTime, true);

                    // Setup form
                    $form = $('#example2form');
                    $form.bind('submit', function() {
                        Example2.resetCountdown();
                        return false;
                    });

                });

                function updateTimer() {

                    // Output timer position
                    var timeString = formatTime(currentTime);
                    $countdown.html(timeString);

                    // If timer is complete, trigger alert
                    if (currentTime == 0) {
                        Example2.Timer.stop();
                        alert('Example 2: Countdown timer complete!');
                        Example2.resetCountdown();
                        return;
                    }

                    // Increment timer position
                    currentTime -= incrementTime;
                    if (currentTime < 0)
                        currentTime = 0;

                }

                this.resetCountdown = function() {

                    // Get time from form
                    var newTime = parseInt($form.find('input[type=text]').val()) * 1000;
                    if (newTime > 0) {
                        currentTime = newTime;
                    }

                    // Stop and reset timer
                    Example2.Timer.stop().once();

                };

  



// Use p.countdown as container, pass redirect, duration, and optional message
$(".countdown").countdown(redirect, 5, "s remaining");

// Function to be called after 5 seconds
function redirect () {
    this.html("Done counting, redirecting.");
    window.location = "http://msdn.microsoft.com";
}


    $('#addhomeplayer').click(function(event) {
        console.log(event);
        $(".table1").find('tr:last').clone().appendTo(".table1");
    });
    $('#addawayplayer').click(function(event) {
        console.log(event);
        $(".table2").find('tr:last').clone().appendTo(".table2");
    });

    function addUpHomePoints(itemClicked) {
        var twopoints = $(itemClicked).parent().children(".hometwopoint").text();
        var threepoints = $(itemClicked).parent().children(".homethreepoint").text();
        var freethrows = $(itemClicked).parent().children(".homefreethrow").text();
        $(itemClicked).parent().children(".playerpoints").text(twopoints * 1 + threepoints * 1 + freethrows * 1);
    }
    function addUpAwayPoints(itemClicked) {
        var twopoints = $(itemClicked).parent().children(".awaytwopoint").text();
        var threepoints = $(itemClicked).parent().children(".awaythreepoint").text();
        var freethrows = $(itemClicked).parent().children(".awayfreethrow").text();
        $(itemClicked).parent().children(".awayplayerpoints").text(twopoints * 1 + threepoints * 1 + freethrows * 1);
    }
    $('.court').click(function(event) {
        console.log(event);
        $('<div class="shot">x<div/>').appendTo(this)
                .css('top', event.offsetY)
                .css('left', event.offsetX);
    });

    $(".table1").on("click", ".hometwopoint", function(event) {
        console.log(event)
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 2);
        //console.log($(this).parent().children(".hometwopoint").text());
        addUpHomePoints(this);
    });

    $(".table1").on("click", ".homethreepoint", function(event) {

        //$('.homethreepoint').click(function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 3);
        addUpHomePoints(this);

    });

    $(".table1").on("click", ".homefreethrow", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 1);
        addUpHomePoints(this);

    });

    $(".table2").on("click", ".awaytwopoint", function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 2);
        addUpAwayPoints(this);
    });

    $(".table2").on("click", ".awaythreepoint", function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 3);
        addUpAwayPoints(this);
    });

    $(".table2").on("click", ".awayfreethrow", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 1);
        addUpAwayPoints(this);
    });
    $(".table1").on("click", ".homerebound", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awayrebound", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table1").on("click", ".homeassists", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awayassists", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table1").on("click", ".homesteals", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homest").text();
        $("#homest").text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awaysteals", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#awayst").text();
        $("#awayst").text(currentScore * 1 + 1);
    });
    $(".table1").on("click", ".homepf", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homefoul").text();
        $("#homefoul").text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awaypf", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#awayfoul").text();
        $("#awayfoul").text(currentScore * 1 + 1);
    });
    $(".table1").on("click", ".hometo", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awayto", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $('.timeoutbutton').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    
}); 