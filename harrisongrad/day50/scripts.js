$(document).ready(function() {

   $('.court').click(function(event) {
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
    });
    
    $('.homethreepoint').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 3);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 3);
    });
    
    $('.homeonepoint').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 1);
    });
    
    $('.homefoul').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    
    });
    
    $('.hometimeout').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    
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
 
      $('.visitingonepoint').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#visitingscore").text();
                    $("#visitingscore").text(currentScore * 1 + 1);
    });
    
   
});