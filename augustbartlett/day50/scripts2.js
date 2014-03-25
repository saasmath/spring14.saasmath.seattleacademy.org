$(document).ready(function() {
    function addUpHomePoints(itemClicked) {
        var twopoints = $(itemClicked).parent().children(".hometwopoint").text();
        var threepoints = $(itemClicked).parent().children(".homethreepoint").text();
        var freethrows = $(itemClicked).parent().children(".homefreethrow").text();
        $(itemClicked).parent().children(".playerpoints").text(twopoints * 1 + threepoints * 1 + freethrows * 1);
    }
    function addUpAwayPoints(itemClicked) {
        var twoapoints = $(itemClicked).parent().children(".awaytwopoint").text();
        var threeapoints = $(itemClicked).parent().children(".awaythreepoint").text();
        var freeathrows = $(itemClicked).parent().children(".awayfreethrow").text();
        $(itemClicked).parent().children(".awayplayerpoints").text(twoapoints * 1 + threeapoints * 1 + freeathrows * 1);
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
         addUpAwayPoints(this);
    });

    $('.awaythreepoint').click(function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 3);
         addUpAwayPoints(this);
    });

    $('.awayfreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 1);
         addUpAwayPoints(this);
    });
    $('.awayplsteals').click(function(event) {
        //console.log(event);
        var currentSteals = $(this).text();
        $(this).text(currentSteals * 1 + 1);
        var currentSteals = $("#awaysteals").text();
        $("#awaysteals").text(currentSteals * 1 + 1);
    });
     $('.homeplsteals').click(function(event) {
        //console.log(event);
        var currentSteals = $(this).text();
        $(this).text(currentSteals * 1 + 1);
        var currentSteals = $("#homesteals").text();
        $("#homesteals").text(currentSteals * 1 + 1);
    });


});