   $(document).ready(function() {
 
                $('.hometwopoint').click(function(event) {
                    //console.log(event);
                    var currentScore = $(this).text();
                    $(this).text(currentScore * 1 + 2);
                    var currentScore = $("#homescore").text();
                    $("#homescore").text(currentScore * 1 + 2);
                });
 
            });


