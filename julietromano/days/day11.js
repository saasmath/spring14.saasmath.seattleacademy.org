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
      $("#elapsedtime").html(0);
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
 
                $("#q1").click(function() {
                    $("#img1").attr("src", "daycorgi.jpg");
                    $("#b1").html("bulldog");
                    $("#img1").data("correct", "Corgi");
                    $("#b1").html("Bulldog");
                    $("#b2").html("The Grinch");
                    $("#b3").html("Corgi");
                    $("#b4").html("Emme Bianco Flailing");
                });
 
 
                $("#q2").click(function() {
                    $("#img1").attr("src", "monkey.jpg");
                    $("#img1").data("correct", "Juliet's Masterpiece");
                    $("#b1").html("Sophie?");
                    $("#b2").html("Does this make me look fat?");
                    $("#b3").html("Victoria's Secret Model");
                    $("#b4").html("Juliet's Masterpiece");
                });
                
               $("#q3").click(function() {
                    $("#img1").attr("src", "day05.jpg");
                    $("#img1").data("correct", "Puppy on a Beach");
                    $("#b1").html("Can I have it?");
                    $("#b2").html("Awww....");
                    $("#b3").html("Puppy on a Beach");
                    $("#b4").html("Puppaaayyy");
                    
               });
               
               $("#q4").click(function() {
                    $("#img1").attr("src", "snow.jpg");
                    $("#b1").html("Rain");
                    $("#img1").data("correct", "Snow");
                    $("#b1").html("Sleet");
                    $("#b2").html("Emme Bianco falling from the Sky");
                    $("#b3").html("Snow");
                    $("#b4").html("Hamburgers");
                });
 
               $("#q5").click(function() {
                    $("#img1").attr("src", "ryan.jpg");
                    $("#b1").html("Oh Hey...");
                    $("#img1").data("correct", "Ryan Reynolds");
                    $("#b1").html("George W. Bush");
                    $("#b2").html("Batman");
                    $("#b3").html("Ryan Reynolds");
                    $("#b4").html("Cindy Lou Who");
                });
                
                  $("#q6").click(function() {
                    $("#img1").attr("src", "help.jpg");
                    $("#b1").html("Bridesmaids");
                    $("#img1").data("correct", "Bridesmaids");
                    $("#b1").html("Help Me I'm Poor");
                    $("#b2").html("Are you an Appliance?");
                    $("#b3").html("Get ready to PAAARTTYYY");
                    $("#b4").html("Bridesmaids");
                });
 
  $("#q7").click(function() {
                    $("#img1").attr("src", "ily.jpg");
                    $("#b1").html("I Love You");
                    $("#img1").data("correct", "I Love You");
                    $("#b1").html("I love You");
                    $("#b2").html("Stove");
                    $("#b3").html("Hawt");
                    $("#b4").html("Bridesmaids");
                });
 
                $(".ans").click(function() {
                    buttonText = $(this).html();
                    correctAnswer = $("#img1").data("correct");
                    totalscore = $("#totalscore").text();
                    if (buttonText === correctAnswer)
                    {
                        $("#totalscore").text(totalscore * 1 + 1);
                        questnum = $("#questnum").text();
                        //alert (questnum);
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
      "image": "corgi.jpg",
      "answer": "Corgi",
      "options": [
        "Fish",
        "Emme Bianco Flailing",
        "Corgi",
        "Duck"
      ]
    },
 
    {
      "image": "ryan.jpg",
      "answer": "Ryan Reynolds",
      "options": [
        "Batman",
        "Not You",
        "Ryan Reynolds",
        "George W. Bush"
      ]
    }
 
  ]
  
  
};

