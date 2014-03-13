 $(document).ready(function() {
 
                $("#q1").click(function() {
                    $("#img1").attr("src", "daycorgi.jpg");
                    $("#b1").html("bulldog");
                    $("#img1").data("correct", "Corgi");
                    $("#b1").html("Bulldog");
                    $("#b2").html("The Grinch");
                    $("#b3").html("Corgi");
                    $("#b4").html("Cindy Lou Who");
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