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
                    $(this).text(currentScore*1+2);
                    var currentScore = $("#visitingscore").text();
                    $("#visitingscore").text(currentScore*1+2);
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
                
                $('.hometurnovers').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $("#hometurnovers").text();
                    $("#hometurnovers").text(currentScore * 1 + 1);
                });

                $('.homefreethrous').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 1);
                    var currentScore = $(".homefreethrous").text();
                    $(".homefreethrous").text(currentScore * 1 + 1);
                });
                
            });


