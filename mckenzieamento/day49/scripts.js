        $(document).ready(function() {

    $('.awaytwopoint').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#homescore").text();
        $("#visitingscore").text(currentScore * 1 + 2);
    });

});

< /script>


