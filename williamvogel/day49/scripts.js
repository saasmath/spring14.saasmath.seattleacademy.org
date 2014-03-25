$(document).ready(function() {

                $('.hometwopoint').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 2);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 2);
                });

                $('.homethreepoint').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 3);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 3);
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
                    $('.homeft').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 1);
                });
                 $('.visitft').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#visitingscore").text();
                    $("#visitingscore").text(currentScore * 1 + 1);
                });
                 $('.homerebounds').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 1);
                });
                $('.visitingrebounds').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#visitingscore").text();
                    $("#visitingscore").text(currentScore * 1 + 1);
                });
            });
