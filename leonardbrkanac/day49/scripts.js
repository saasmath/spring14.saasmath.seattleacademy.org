/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

            $(document).ready(function() {
                 
                $('.court').click(function(event) {
        console.log(event);
        $('<div class="shot">x<div/>').appendTo(this)
                .css('top', event.offsetY)
                .css('left', event.offsetX);
    });
                
                $('.homefouls').click(function(event) {
                    var homesteals = $ (this) .text();
                    $(this).text(homesteals * 1 + 1);
                    var homefouls = $("#homesteals").text();
                    $("#homesteals").text(homesteals * 1 + 2);
                       
                });
                        

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
                 $('.homefreethrow').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 1);
                });

                $('.awaytwopoint').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 2);
                    var currentScore = $("#visitingscore").text();
                    $("#visitingscore").text(currentScore * 1 + 2);
                });
                 $('.awaythreepoint').click(function(event) {
                    //console.log(event);
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

            });

       

