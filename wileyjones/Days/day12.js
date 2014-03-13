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
            "image": "http://saasmath.seattleacademy.org/picts/Anderson-Gary.jpg",
            "answer": "Gary Anderson",
            "options": [
                "bull",
                "Gary Anderson",
                "cat",
                "bulldog"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Adams-Thomas.jpg",
            "answer": "Thomas Adams",
            "options": [
                "bull",
                "Thomas Adams",
                "Cat Struggling",
                "bulldog"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Cimino-Michael.jpg",
            "answer": "Michael Cimino",
            "options": [
                "bull",
                "goldfish",
                "Cat Struggling",
                "Michael Cimino"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Shapiro-Paul.jpg",
            "answer": "Paul Shapiro",
            "options": [
                "bull",
                "Paul Shapira",
                "Cat Struggling",
                "Paul Shapiro"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Feder-Emily.jpg",
            "answer": "Emily Feder",
            "options": [
                "bull",
                "goldfish",
                "Emily Feder",
                "Michael Cimino"
            ]
        },
        {
            "image": "http://saasmath.seattleacademy.org/picts/Schroeppel-Steven.jpg",
            "answer": "Steven Schroeppel",
            "options": [
                "bull",
                "Steven Schroeppel",
                "Emily Feder",
                "Michael Cimino"
            ]
        }

    ]
};