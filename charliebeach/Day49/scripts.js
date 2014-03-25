$(document).ready(function() {

    $('.court').click(function(event) {
        console.log(event);
        $('<div class="shot">x<div/>').appendTo(this)
                .css('top', event.offsetY)
                .css('left', event.offsetX);
    });
    $('.hometwopoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 2);
        console.log($(this).parent().children(".hometwopoint").text());
        
    });
     $('.homefreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 1);
        console.log($(this).parent().children(".homefreethrow").text());
        
    });

    $('.awaytwopoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#awayscore").text();
        $("#awayscore").text(currentScore * 1 + 2);
    });
     $('.awayfreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#awayscore").text();
        $("#awayscore").text(currentScore * 1 + 1);
        console.log($(this).parent().children(".awayfreethrow").text());
        
    });
    $('.homethreepoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 3);
        console.log($(this).parent().children(".homethreepoint").text());
    });
    $('.awaythreepoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#awayscore").text();
        $("#awayscore").text(currentScore * 1 + 3);
    });
    $('.awayplsteals').click(function(event) {
        //console.log(event);
        var currentSteals = $(this).text();
        $(this).text(currentSteals * 1 + 1);
        var currentSteals = $("#awaysteals").text();
        $("#awaysteals").text(currentSteals * 1 + 1);
    });


    $('.totalplpoints').click(function(event) {
        console.log($('.active').parent().get(0));
        var currentSteals = $(this).text();
        $(this).text(currentSteals * 1 + 1);
        var currentSteals = $("#awaysteals").text();
        $("#awaysteals").text(currentSteals * 1 + 1);
    });


});