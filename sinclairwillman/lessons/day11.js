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
     $("#elapsedtime").html("0");
     clearInterval(counter);
     //counter ended, do something here
     return;
  }
$("#elapsedtime").html(count);
}
 
function resetTimer(totaltime){
    clearInterval(counter);
    count = totaltime;
    if (count <= 0){
        clearInterval(counter);
    }
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
 
}

$(document).ready(function() {
setQuestion(0);
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
        $("#img1").attr("src", "goldfish.jpg");
        $("#img1").data("correct", "goldfish");
        $("#b1").html("Cat Failing");
        $("#b2").html("Snow");
        $("#b3").html("goldfish");
        $("#b4").html("Plant");
    }); 
    
    $("#q4").click(function() {
        $("#img1").attr("src", "happyhippo.png");
        $("#img1").data("correct", "hippo on a trampoline");
        $("#b1").html("hippo on a trampoline");
        $("#b2").html("trippo on a hampoline");
        $("#b3").html("trampoline on a hippo");
        $("#b4").html("hippodibippo");
    }); 
    
     $("#q5").click(function() {
        $("#img1").attr("src", "ostrich.png");
        $("#img1").data("correct", "ostrich on a treadmill");
        $("#b1").html("turkey on a bike");
        $("#b2").html("ostrich on a trampoline");
        $("#b3").html("ostrich");
        $("#b4").html("ostrich on a treadmill");
    });

    $(".ans").click(function() {
        buttonText = $(this).html();
        correctAnswer = $("#img1").data("correct");
        totalscore = $("#totalscore").text();
        if (buttonText === correctAnswer)
        {
            $("#totalscore").text(totalscore * 1 + 1);
            questnum = $("#questnum").text();
            //alert(questnum);
            $("#questnum").text(questnum*1 + 1);
            setQuestion(questnum);
            resetTimer(15);
        }
        else {
            $("#totalscore").text(totalscore * 1 - 1);
        }

    });



});
var quiz = {
  "q": [
    {
      "image": "http://i.imgur.com/dEd7bFG.gif",
      "answer": "catfalling",
      "options": [
        "bull",
        "catfalling",
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
        "Cat Struggling",
        "bulldog"
      ]
    },
    
    {
      "image": "http://i.imgur.com/oIEc0BD.gif",
      "answer": "Cat Struggling",
      "options": [
        "bull",
        "goldfish",
        "Cat Struggling",
        "bulldog"
      ]
    },
 
    {
      "image": "happyhippo.png",
      "answer": "hippo on a trampoline",
      "options": [
        "hippo on a trampoline",
        "trippo on a hampoline",
        "trampoline on a hippo",
        "hippodibippo"
      ]
    }
  ]
};