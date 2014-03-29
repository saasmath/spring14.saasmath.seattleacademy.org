$(document).ready(function() {


    $('#addhomeplayer').click(function(event) {
        console.log(event);
        $(".table1").find('tr:last').clone().appendTo(".table1");
    });
    $('#addawayplayer').click(function(event) {
        console.log(event);
        $(".table2").find('tr:last').clone().appendTo(".table2");
    });

    function addUpHomePoints(itemClicked) {
        var twopoints = $(itemClicked).parent().children(".hometwopoint").text();
        var threepoints = $(itemClicked).parent().children(".homethreepoint").text();
        var freethrows = $(itemClicked).parent().children(".homefreethrow").text();
        $(itemClicked).parent().children(".playerpoints").text(twopoints * 1 + threepoints * 1 + freethrows * 1);
    }
    function addUpAwayPoints(itemClicked) {
        var twopoints = $(itemClicked).parent().children(".awaytwopoint").text();
        var threepoints = $(itemClicked).parent().children(".awaythreepoint").text();
        var freethrows = $(itemClicked).parent().children(".awayfreethrow").text();
        $(itemClicked).parent().children(".awayplayerpoints").text(twopoints * 1 + threepoints * 1 + freethrows * 1);
    }
    $('.court').click(function(event) {
        console.log(event);
        $('<div class="shot">x<div/>').appendTo(this)
                .css('top', event.offsetY)
                .css('left', event.offsetX);
    });

    $(".table1").on("click", ".hometwopoint", function(event) {
        console.log(event)
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 2);
        //console.log($(this).parent().children(".hometwopoint").text());
        addUpHomePoints(this);
    });

    $(".table1").on("click", ".homethreepoint", function(event) {

        //$('.homethreepoint').click(function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 3);
        addUpHomePoints(this);

    });

    $(".table1").on("click", ".homefreethrow", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homescore").text();
        $("#homescore").text(currentScore * 1 + 1);
        addUpHomePoints(this);

    });

    $(".table2").on("click", ".awaytwopoint", function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 2);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 2);
        addUpAwayPoints(this);
    });

    $(".table2").on("click", ".awaythreepoint", function(event) {
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 3);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 3);
        addUpAwayPoints(this);
    });

    $(".table2").on("click", ".awayfreethrow", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#visitingscore").text();
        $("#visitingscore").text(currentScore * 1 + 1);
        addUpAwayPoints(this);
    });
    $(".table1").on("click", ".homerebound", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awayrebound", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table1").on("click", ".homeassists", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awayassists", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table1").on("click", ".homesteals", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homest").text();
        $("#homest").text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awaysteals", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#awayst").text();
        $("#awayst").text(currentScore * 1 + 1);
    });
    $(".table1").on("click", ".homepf", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#homefoul").text();
        $("#homefoul").text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awaypf", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
        var currentScore = $("#awayfoul").text();
        $("#awayfoul").text(currentScore * 1 + 1);
    });
    $(".table1").on("click", ".hometo", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $(".table2").on("click", ".awayto", function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });
    $('.timeoutbutton').click(function(event) {
        //console.log(event);
        var currentScore = $(this).text();
        $(this).text(currentScore * 1 + 1);
    });

});