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
                
                $('.awaytwopoint').click(function(event) {
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
                    console.log($(this).parent().children(".homethreepoint").text());
                });
 
                $('.awaythreepoint').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 3);
                    var currentScore = $("#visitingscore").text();
                    $("#visitingscore").text(currentScore * 1 + 3);
                });
 
                $('.homefreethrow').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 1);
                });
                
                $('.awayfreethrow').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#visitingscore").text();
                    $("#visitingscore").text(currentScore * 1 + 1);
                });
                
                $('.homerebound').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                });
                $('.awayrebound').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                });
                $('.homeassists').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                });
                $('.awayassists').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                });
                $('.homesteals').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#homest").text();
                    $("#homest").text(currentScore * 1 + 1);
                });
                $('.awaysteals').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#awayst").text();
                    $("#awayst").text(currentScore * 1 + 1);
                });
                $('.homepf').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#homefoul").text();
                    $("#homefoul").text(currentScore * 1 + 1);
                });
                $('.awaypf').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#awayfoul").text();
                    $("#awayfoul").text(currentScore * 1 + 1);
                });
                $('.hometo').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                });
                $('.awayto').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                });
                
            });
 
