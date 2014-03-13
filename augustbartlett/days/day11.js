function setQuestion(qnum) {
    $("#img1").attr("src", quiz.q[qnum].image);
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
    count = totaltime;
    if (count <= 0){
        clearInterval(counter);
    
    }
    //var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
 
}

$(document).ready(function() {
setQuestion(0);
        $("#q1").click(function() {
$("#img1").attr("src", "seahawks.png");
        $("#img1").data("correct", "Seattle Seahawks");
        $("#b1").html("Seattle Seahawks");
        $("#b2").html("Atlanta Falcons");
        $("#b3").html("Baltimore Ravens");
        $("#b4").html("New England Patriots");
});
        $("#q2").click(function() {
$("#img1").attr("src", "bills.jpeg");
        $("#img1").data("correct", "Buffalo Bills");
        $("#b1").html("Cleveland Browns");
        $("#b2").html("Jacksonville Jaguars");
        $("#b3").html("Buffalo Bills");
        $("#b4").html("Green Bay Packers");
});
        $("#q3").click(function() {
        $("#img1").attr("src", "bhutan.gif");
        $("#img1").data("correct", "Bhutan");
        $("#b1").html("Bangladesh");
        $("#b2").html("India");
        $("#b3").html("Bhutan");
        $("#b4").html("Poland");
        });
   
        $("#q4").click(function() {
        $("#img1").attr("src", "slovenia.gif");
        $("#img1").data("correct", "Slovenia");
        $("#b1").html("Slovenia");
        $("#b2").html("Slovakia");
        $("#b3").html("Denmark");
        $("#b4").html("Croatia");
       });
   
        $("#q5").click(function() {
        $("#img1").attr("src", "zambia.gif");
        $("#img1").data("correct", "Zambia");
        $("#b1").html("Libya");
        $("#b2").html("Namibia");
        $("#b3").html("Zimbabwe");
        $("#b4").html("Zambia");
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
        $("#questnum").text(questnum*1+1)
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
        "image": "seahawks.png",
                "answer": "Seattle Seahawks",
                "options": [
                        "Seattle Seahawks",
                        "Atlanta Falcons",
                        "Baltimore Ravens",
                        "New England Patriots"
                ]
        },
        {
        "image": "bills.jpeg",
                "answer": "Buffalo Bills",
                "options": [
                        "Cleveland Browns",
                        "Jacksonville Jaguars",
                        "Buffalo Bills",
                        "Green Bay Packers"
                ]
        },
        {
        "image": "bills.jpeg",
                "answer": "Buffalo Bills",
                "options": [
                        "Cleveland Browns",
                        "Jacksonville Jaguars",
                        "Buffalo Bills",
                        "Green Bay Packers"
          ]
        }

    ]
};

        
                
                



