  function setQuestion(qnum){
     $("#img1").attr("src",quiz.q[qnum].image);
     $("#img1").data("correct", quiz.q[qnum].answer);
      $("#b1").html(quiz.q[qnum].options[0]);
      $("#b2").html(quiz.q[qnum].options[1]);
      $("#b3").html(quiz.q[qnum].options[2]);
      $("#b4").html(quiz.q[qnum].options[3]); 
      $("#b5").html(quiz.q[qnum].options[3]); 
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
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
 
}
  $(document).ready(function() {
 setQuestion(0);
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
                   $("#q4").click(function() {
                    $("#img1").attr("src", "aston.jpg");
                    $("#img1").data("correct", "Aston Martin");
                    $("#b1").html("Lamborghini");
                    $("#b2").html("Aston Martin");
                    $("#b3").html("Porshe");
                    $("#b4").html("Ferrari");
                                });
                   $("#q5").click(function() {
                    $("#img1").attr("src", "fourseasons.png");
                    $("#img1").data("correct", "Four Seasons");
                    $("#b1").html("Westin");
                    $("#b2").html("Bvlgari");
                    $("#b3").html("Four Seasons");
                    $("#b4").html("Ritz-Carlton");
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
    },
    
          {
              "image":"aston.jpg",
              "answer":"Aston Martin",
              "options": [
                  "Lamborghini",
                  "Aston Martin",
                  "Porshe",
                  "Ferrari"
              ]
          },
          
          {
              "image": "fourseasons.png",
              "answer":"Four Seasons",
              "options": [
                  "Westin",
                  "Bvlgari",
                  "Four Seasons",
                  "Ritz-Carlton"
              ]
          }
 
  ]
};