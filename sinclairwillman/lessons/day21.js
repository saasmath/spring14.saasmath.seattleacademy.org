function getAnswers() {
    quiz = $("body").data("quiz");
    var answers = [];
    for (count = 0; count < quiz.length; count++) {
        answers.push(quiz[count].answer);
    }
    answers.sort();
    return answers;
}


function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function init() {
    Tabletop.init({key: '0AicSp9ajiT-GdFR1MmJ4YnhHZ2tIcUpLSTFJWTJ0dGc',
        callback: loadquiz,
        simpleSheet: true});
}
var answers;
function loadquiz(data) {
    shuffle(data);
    $("body").data("quiz", data);
    answers = getAnswers();
    $("#answerin").autocomplete({
        source: answers
    });
    setQuestion(0);
}


function setQuestion(qnum) {
    quiz = $("body").data("quiz");
    $("#b1").html(quiz[(qnum + 1) % quiz.length].answer);
    $("#b2").html(quiz[(qnum + 2) % quiz.length].answer);
    $("#b3").html(quiz[(qnum + 3) % quiz.length].answer);
    $("#b4").html(quiz[(qnum + 4) % quiz.length].answer);
    rand = Math.random();
    if (rand > .5) {
        if (rand > .75) {
            $("#b1").html(quiz[(qnum) % quiz.length].answer)
        }
        else
            $("#b2").html(quiz[(qnum) % quiz.length].answer)
    }
    else {
        if (rand < .25) {
            $("#b3").html(quiz[(qnum) % quiz.length].answer)
        }
        else
            $("#b4").html(quiz[(qnum) % quiz.length].answer)
    }

    image = 'http://saasmath.seattleacademy.org/picts/' + quiz[qnum].prompt;
    $("#img1").attr("src", image);
    $("#img1").data("correct", quiz[qnum].answer);
    $("#keywords").html(quiz[qnum].keywords);

}
var mycount = 0;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
    mycount = mycount + 1;
    $("#elapsedtime").html(mycount);
}

function resetTimer(totaltime) {
    clearInterval(counter);
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

}




$(document).ready(function() {
    init();
    $('#togglebuttons').click(function() {
        $('.buttonchoice').toggle();
    });

    $('#wrongsound').get(0).play();

    $('#answerform').submit(function(e) {
        response = $('#answerin').val();
        console.log(response);
        correctAnswer = $("#img1").data("correct");
        totalscore = $("#totalscore").text();
        if (response === correctAnswer)
        {
            $("#totalscore").text(totalscore * 1 + 2);
            questnum = $("#questnum").text();
            $("#questnum").text(questnum * 1 + 1);
            setQuestion(questnum);
            $('#answerin').val('');
        }
        else {
            $("#totalscore").text(totalscore * 1 - 1);
        }
        return false;
    });

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
        }
        else {
            $("#totalscore").text(totalscore * 1 - 1);
        }
    });

});