/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
            clearInterval(counter);
        }
    });
 
});
var quiz = {
    "q": [
        {
            "image": "http://saasmath.seattleacademy.org/picts/Anderson-Gary.jpg",
            "answer": "Gary Anderson",
            "options": [
                "Gerald Elliot",
                "Gary Anderson",
                "Mike Haykin",
                "Caitlin Lyons"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Bell-Alana.jpg",
            "answer": "Alana Bell",
            "options": [
                "Alana Bell",
                "Lauren Lee",
                "Gary Anderson",
                "James Watson"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Flood-Tom.jpg",
            "answer": "Tom Flood",
            "options": [
                "Tom Flood",
                "Rob Phillips",
                "Peter Clark",
                "Pete Flynn"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Schwartz-Erin.jpg",
            "answer": "Erin Schwartz",
            "options": [
                "Elin Rummel",
                "Rae Robertson",
                "Thomas Adams",
                "Erin Schwartz"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Hosack-Garry.jpg",
            "answer": "Garry Hosack",
            "options": [
                "Garry Hosack",
                "David Johns",
                "Thomas Batingan",
                "Gary Anderson"
            ]
        }
    ]
};

 
    



