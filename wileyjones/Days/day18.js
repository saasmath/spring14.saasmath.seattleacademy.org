
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
    
    if(Math.random() > .5)
        $("#b2").html(quiz[(qnum)%quiz.length].answer)
    else
        $("#b4").html(quiz[(qnum)%quiz.length].answer);
    
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

function resetTimer(totaltime) {
    clearInterval(counter);
    count= 0;
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

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
            //resetTimer(0);
        }
        else {
            $("#totalscore").text(totalscore * 1 - 1);
        }
        $("#formscore").val($("#totalscore").text());
        $("#formtime").val($("#elapsedtime").text());
        $("#formquestion").val($("#questnum").text());
    });

});