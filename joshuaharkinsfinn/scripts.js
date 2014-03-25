$(document).ready(function() {

    $('.hometwopoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 2);
    });

    $('.visitingtwopoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 2);
    });

    $('.visitingthreepoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 3);
    });

    $('.homethreepoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 3);
    });

    $('.visitingfreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 1);
    });

    $('.homefreethrow').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 1);
    });

    $('.homesteals').click(function(event) {
        //console.log(event);
        var currentSteals = $(this).text();
        $(this).text(currentSteals * 1 + 1);
        var currentSteals = $("#homesteals").text();
        $("#homesteals").text(currentSteals * 1 + 1);
    });

    $('.awaysteals').click(function(event) {
        //console.log(event);
        var currentSteals = $(this).text();
        $(this).text(currentSteals * 1 + 1);
        var currentSteals = $("#awaysteals").text();
        $("#awaysteals").text(currentSteals * 1 + 1);
    });

    $('.hometimeouts').click(function(event) {
        //console.log(event);
        var currentTimeouts = $(this).text();
        $(this).text(currentTimeouts * 1 + 1);
        var currentTimeouts = $("#hometimeouts").text();
        $("#hometimeouts").text(currentTimeouts * 1 + 1);
    });

    $('.awaytimeouts').click(function(event) {
        //console.log(event);
        var currentTimeouts = $(this).text();
        $(this).text(currentTimeouts * 1 + 1);
        var currentTimeouts = $("#awaytimeouts").text();
        $("#awaytimeouts").text(currentTimeouts * 1 + 1);
    });

    $('.homefouls').click(function(event) {
        //console.log(event);
        var currentFouls = $(this).text();
        $(this).text(currentFouls * 1 + 1);
        var currentFouls = $("#homefouls").text();
        $("#homefouls").text(currentFouls * 1 + 1);
    });

    $('.awayfouls').click(function(event) {
        //console.log(event);
        var currentFouls = $(this).text();
        $(this).text(currentFouls * 1 + 1);
        var currentFouls = $("#awayfouls").text();
        $("#awayfouls").text(currentFouls * 1 + 1);
    });

});

