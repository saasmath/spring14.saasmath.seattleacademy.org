$(document).ready(function() {
    
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
 
                $(".ans").click(function() {
                    $("#img1").attr("src", "day02.jpg");
                    $("#img1").data("correct", "Wiley");
                    $("#b4") .data ("#q2");
                    $("#q1").html("bulldog");
                    $("#b2").html("cat");
                    $("#b3").html("cow");
                    $("#b4").html("Wiley");
                    $(this).removeClass('ans').addClass('ans2')
                });
 
 
                $(".ans2").click(function() {
                    $("#img1").attr("src", "../../img/goldfish.jpg");
                    $("#img1").data("correct", "goldfish");
                    $("#b1").html("bulldog");
                    $("#b2").html("goldfish");
                    $("#b3").html("cat");
                    $("#b4").html("hen");
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