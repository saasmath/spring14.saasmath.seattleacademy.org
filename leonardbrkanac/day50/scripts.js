$(document).ready(function() {
    function addUpHomePoints(itemClicked){
        var twopoints = $(itemClicked).parent().children(".hometwopoint").text();
        var threepoints = $(itemClicked).parent().children(".homethreepoint").text();
        var freethrows = $(itemClicked).parent().children(".homefreethrow").text();
        $(itemClicked).parent().children(".playerpoints").text(twopoints*1+threepoints*1+freethrows*1);
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
     $('.homesteals').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homesteals").text();
        $("#homesteals").text(currentScore * 1 + 1);
    });
     $('.turnovers').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#turnovers").text();
        $("#turnovers").text(currentScore * 1 + 1);
    });
   
     $('.personalfouls').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#personalfouls").text();
        $("#personalfouls").text(currentScore * 1 + 1);
    });
   

});

