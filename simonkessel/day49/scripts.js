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

    $('.homethreepoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 3);
    });

    $('.visitingthreepoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 3);
    });
    
    $('.homeft').click(function(event) {
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
    
    $('.visitingsteals').click(function(event) {
        //console.log(event);
        var currentSteals = $(this).text();
        $(this).text(currentSteals * 1 + 1);
        var currentSteals = $("#visitingsteals").text();
        $("#visitingsteals").text(currentSteals * 1 + 1);
    });

});
