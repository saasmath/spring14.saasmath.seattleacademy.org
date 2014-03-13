$(document).ready(function() {

    $("#q1").click(function() {
        $("#img1").attr("src", "http://t1.gstatic.com/images?q=tbn:ANd9GcQB95TV51tQP2RHY9J9J_kjGf8OhXESSA6_4Mx2_gtFZuY-S6N9");
        $("#img1").data("correct", "Banana");
        $("#b1").html("Banana");
        $("#b2").html("Cat");
        $("#b3").html("Keegan");
        $("#b4").html("Scale");
    });


    $("#q2").click(function() {
        $("#img1").attr("src", "http://i.imgur.com/dEd7bFG.gif");
        $("#img1").data("correct", "Cat Failing");
        $("#b1").html("Cat Failing");
        $("#b2").html("Snow");
        $("#b3").html("Cat Winning");
        $("#b4").html("Car");
    });
    $("#q3").click(function() {
        $("#img1").attr("src", "http://i.imgur.com/oIEc0BD.gif");
        $("#img1").data("correct", "Cat Struggling");
        $("#b1").html("Cat Failing");
        $("#b2").html("Snow");
        $("#b3").html("Cat Struggling");
        $("#b4").html("Plant");
    });
    $("#q4").click(function() {
        $("#img1").attr("src", "http://i.imgur.com/zUKw6xE.jpg");
        $("#img1").data("correct", "Common Sence");
        $("#b1").html("Common Sence");
        $("#b2").html("Snow");
        $("#b3").html("Cat Struggling");
        $("#b4").html("Plant");
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
var quiz = {
  "q": [
    {
      "image": "bulldog.jpg",
      "answer": "bulldog",
      "options": [
        "bull",
        "goldfish",
        "cat",
        "bulldog"
      ]
    },
 
    {
      "image": "goldfish.jpg",
      "answer": "goldfish",
      "options": [
        "bull",
        "goldfish",
        "cat",
        "bulldog"
      ]
    }
 
  ]
};