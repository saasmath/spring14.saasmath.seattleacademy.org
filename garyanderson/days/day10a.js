$(document).ready(function() {

    $("#q1").click(function() {
        $("#img1").attr("src", "../../img/bulldog.jpg");
        $("#img1").data("correct", "bulldog");
        $("#b1").html("bulldog");
        $("#b2").html("cat");
        $("#b3").html("cow");
        $("#b4").html("hen");
    });


    $("#q2").click(function() {
        $("#img1").attr("src", "../../img/goldfish.jpg");
        $("#img1").data("correct", "goldfish");
        $("#b1").html("bulldog");
        $("#b2").html("goldfish");
        $("#b3").html("cat");
        $("#b4").html("hen");
    });

    $(".ans").click(function() {
        buttonText = $(this).html();
        correctAnswer = $("#img1").data("correct");
        totalscore = $("#totalscore").text();
        if (buttonText === correctAnswer)
        {
            $("#totalscore").text(totalscore * 1 + 1);
        }
        else {
            $("#totalscore").text(totalscore * 1 - 1);
        }

    });



});