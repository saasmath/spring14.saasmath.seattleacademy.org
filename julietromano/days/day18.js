function init() {
    Tabletop.init({key: '0AicSp9ajiT-GdFR1MmJ4YnhHZ2tIcUpLSTFJWTJ0dGc',
        callback: loadquiz,
        simpleSheet: true});
}

function loadquiz(data) {
    $("body").data("quiz", data);
        setQuestion(0);
}



function setQuestion(qnum) {
    console.log(qnum);
    quiz = $("body").data("quiz");
    console.log(quiz.length);
    $("#b1").html(quiz[(qnum+1)%quiz.length].answer);
    $("#b2").html(quiz[(qnum+2)%quiz.length].answer);
    $("#b3").html(quiz[(qnum+3)%quiz.length].answer);
    $("#b4").html(quiz[(qnum+4)%quiz.length].answer);
    rand = Math.random();
    if( rand > .5){        
        if(rand > .75){
             $("#b1").html(quiz[(qnum)%quiz.length].answer)
        }
        else $("#b2").html(quiz[(qnum)%quiz.length].answer)
    }
    else {
        if(rand < .25){
             $("#b3").html(quiz[(qnum)%quiz.length].answer)
        }
        else $("#b4").html(quiz[(qnum)%quiz.length].answer)
    }
    
    image = 'http://saasmath.seattleacademy.org/picts/' + quiz[qnum].prompt;
    $("#img1").attr("src", image);
    $("#img1").data("correct", quiz[qnum].answer);
}
var count = 0;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
    count = count + 1;
    $("#elapsedtime").html(count);
}



$(document).ready(function() {
    init();


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

$(document).ready(function() {
    init();
    $("#wrong").click(function(e) {
        $('#wrongsound').get(0).play();
    });

    $(".ans").click(function() {
        buttonText = $(this).html();
        correctAnswer = $("#img1").data("correct");
        totalscore = $("#totalscore").text();
        if (buttonText === correctAnswer)
        {
            $("#totalscore").text(totalscore * 1 + 1);
            $('#correctsound').get(0).play();
            questnum = $("#questnum").text();
            $("#questnum").text(questnum * 1 + 1);
            setQuestion(questnum);
        }
        else {
            $("#totalscore").text(totalscore * 1 - 1);
            $('#wrongsound').get(0).play();
        }
    });

});
