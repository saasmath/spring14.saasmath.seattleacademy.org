function setQuestion(qnum) {
    $("#img1").attr("src", quiz.q[qnum].image);
    $("#img1").data("correct", quiz.q[qnum].answer);
    $("#b1").html(quiz.q[qnum].options[0]);
    $("#b2").html(quiz.q[qnum].options[1]);
    $("#b3").html(quiz.q[qnum].options[2]);
    $("#b4").html(quiz.q[qnum].options[3]);
}
 
var count = 15;
 
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
 
function timer()
{
    count = count - 1;
    if (count <= 0)
    {
        $("#elapsedtime").html("0");
        clearInterval(counter);
        //counter ended, do something here
        return;
    }
    $("#elapsedtime").html(count);
}
 
function resetTimer(totaltime) {
    count = totaltime;
    if (count <= 0) {
        clearInterval(counter);
    }
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
 
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
            questnum = $("#questnum").text();
            $("#questnum").text(questnum * 1 + 1);
            setQuestion(questnum);
            clearInterval(counter);
        }
        else {
            $("#totalscore").text(totalscore * 1 - 1);
        }
    });
 
});
var quiz = {
    "q": [
        {
            "image": "http://saasmath.seattleacademy.org/picts/Adams-Thomas.jpg",
            "answer": "Thomas Adams",
            "options": [
                "Gary Anderson",
                "Thomas Adams",
                "Alison Ray",
                "Mark Betnel"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Dam-Long.jpg",
            "answer": "Long Dam",
            "options": [
                "Alana Bell",
                "Long Dam",
                "Nick Lew",
                "George Burpee"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Flynn-Pete.jpg",
            "answer": "Pete Flynn",
            "options": [
                "Robin Gage",
                "Regan Falcon",
                "Thomas Adams",
                "Pete Flynn"
            ]
        },
         {
            "image": "http://saasmath.seattleacademy.org/picts/Haykin-Mike.jpg",
            "answer": "Mike Haykin",
            "options": [
                "Mike Haykin",
                "Mark Hoover",
                "Alana Bell",
                "Ed Hoffman"
            ]
        },
         {
            "image": "http://saasmath.seattleacademy.org/picts/Pearl-Gayle.jpg",
            "answer": "Gale Pearl",
            "options": [
                "Donna Romero",
                "April Storie",
                "Mike Haykin",
                "Gale Pearl"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Zoog-Spring.jpg",
            "answer": "Spring Zoog",
            "options": [
                "Rebecca Klien",
                "Gale Pearl",
                "Spring Zoog",
                "April Storie"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Zwiers-Don.jpg",
            "answer": "Don Zwiers",
            "options": [
                "Tom Flood",
                "Don Zwiers",
                "Fred Strong",
                "April Storie"
            ]
            
        },
        
        
        
 
    ]
};