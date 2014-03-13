    $(document).ready(function() {
 
                $("#q1").click(function() {
                    $("#img1").attr("src", "bowling.jpg");
                    $("#img1").data("correct", "Bowling Ball");
                    $("#b1").html("Tennis Ball");
                    $("#b2").html("Bowling Ball");
                    $("#b3").html("Basketball");
                    $("#b4").html("Soccerball");
                });
 
 
                $("#q2").click(function() {
                    $("#img1").attr("src", "Italianflag.jpg");
                    $("#img1").data("correct", "Italian Flag");
                    $("#b1").html("Mexican Flag");
                    $("#b2").html("Irish Flag");
                    $("#b3").html("Hungarian Flag");
                    $("#b4").html("Italian Flag");
                });
  $("#q3").click(function() {
                    $("#img1").attr("src", "gucci.png");
                    $("#img1").data("correct", "Gucci");
                    $("#b1").html("Lois Voitton");
                    $("#b2").html("Gucci");
                    $("#b3").html("Tom Ford");
                    $("#b4").html("Bvlgari");
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
      "image": "Italianflag.jpg",
      "answer": "Italian Flag",
      "options": [
        "Mexican Flag",
        "Irish Flag",
        "Hungarian Flag",
        "Turkish Flag"
      ]
    },
 
    {
      "image": "bowling.jpg",
      "answer": "Bowling ball",
      "options": [
        "Basketball",
        "Soccer Ball",
        "Baseball",
        "Tennis Ball"
      ]
    },
    
    {
      "image": "gucci.pnj",
      "answer": "Gucci",
      "options": [
        "Louis Voitton",
        "Tom Ford",
        "Bvlgari",
        "Ford"
      ]
    }
 
  ]
};