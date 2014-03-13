function setQuestion(qnum){
     $("#img1").attr("src",quiz.q[qnum].image);
     $("#img1").data("correct", quiz.q[qnum].answer);
      $("#b1").html(quiz.q[qnum].options[0]);
      $("#b2").html(quiz.q[qnum].options[1]);
      $("#b3").html(quiz.q[qnum].options[2]);
      $("#b4").html(quiz.q[qnum].options[3]);    
}
 
var count=15;
 
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
 
function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
$("#elapsedtime").html(count);
}
 
function resetTimer(totaltime){
    count = totaltime;
    if (count <= 0){
        clearInterval(counter);
    }
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
 
}
$(document).ready(function() {
setQuestion(0);
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
            resetTimer(15);
            setQuestion(1);
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