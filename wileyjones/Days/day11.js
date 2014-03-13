function setQuestion(qnum){
     $("#img1").attr("src",quiz.q[qnum].image);
     $("#img1").data("correct", quiz.q[qnum].answer);
      $("#b1").html(quiz.q[qnum].options[0]);
      $("#b2").html(quiz.q[qnum].options[1]);
      $("#b3").html(quiz.q[qnum].options[2]);
      $("#b4").html(quiz.q[qnum].options[3]);    
}
 
var count=16;
 
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
 
function timer()
{
  count=count-1;
  if (count <= 0)
  {
      $("#elapsedtime").html (0);
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
    //var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
 
}
$(document).ready(function() {
setQuestion(0);
    

    $(".ans").click(function() {
        buttonText = $(this).html();
        correctAnswer = $("#img1").data("correct");
        totalscore = $("#totalscore").text();
        if (buttonText === correctAnswer)
        {
            $("#totalscore").text(totalscore * 1 + 1);
            questnum= $("#questnum").text();
            //alert(questnum);
            $("#questnum").text(questnum * 1 + 1);
                                 //clearInterval(counter);
            resetTimer(16);
            setQuestion(questnum);

        }
        else {
            $("#totalscore").text(totalscore * 1 - 1);
        }

    });

});

var quiz = {
  "q": [
    {
      "image": "Gary.jpg",
      "answer": "Gary",
      "options": [
        "bull",
        "Gary",
        "cat",
        "bulldog"
      ]
    },
 
    {
      "image": "day02.jpg",
      "answer": "Wiley",
      "options": [
        "Wiley",
        "goldfish",
        "cat",
        "bulldog"
      ]
    },
    
    {
      "image": "llama.jpg",
      "answer": "Llama",
      "options": [
        "cat",
        "goldfish",
        "Llama",
        "bulldog"
      ]
    },
    {
      "image": "Coffee.jpg",
      "answer": "Coffee",
      "answer": "Poverty",
      "options": [
        "Coffee",
        "Gary",
        "Poverty",
        "bulldog"
      ]
    },
 
    {
      "image": "day02.jpg",
      "answer": "Wiley",
      "options": [
        "Wiley",
        "goldfish",
        "cat",
        "bulldog"
      ]
    }
 
  ]
};