 $(function() {

    var availableTags = [

      "Gary Anderson",

      "AppleScript",

      "Asp",

      "BASIC",

      "C",

      "C++",

      "Clojure",

      "COBOL",

      "ColdFusion",

      "Erlang",

      "Fortran",

      "Groovy",

      "Haskell",

      "Java",

      "JavaScript",

      "Lisp",

      "Perl",

      "PHP",

      "Python",

      "Ruby",

      "Scala",

      "Scheme"

    ];

    $( "#tags" ).autocomplete({

      source: availableTags

    });

  });


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

function loadquiz(data) {
    console.log(data);
    shuffle(data);
    console.log(data);
    $("body").data("quiz", data);
    setQuestion(0);
}


function setQuestion(qnum) {
    console.log(qnum);
    quiz = $("body").data("quiz");
    console.log(quiz.length);
    $("#b1").html(quiz[(qnum + 1) % quiz.length].answer);
    $("#b2").html(quiz[(qnum + 2) % quiz.length].answer);
    $("#b3").html(quiz[(qnum + 3) % quiz.length].answer);
    $("#b4").html(quiz[(qnum + 4) % quiz.length].answer);

    if (Math.random() > .5)
        $("#b2").html(quiz[(qnum) % quiz.length].answer)
    else
        $("#b4").html(quiz[(qnum) % quiz.length].answer);

    image = 'http://saasmath.seattleacademy.org/picts/' + quiz[qnum].prompt;
    $("#img1").attr("src", image);
    $("#img1").data("correct", quiz[qnum].answer);
    $("#keywords").html(quiz[qnum].keywords);
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
    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

}

$(document).ready(function() {
    init();
    $("#wrong").click(function(e) {
        $('#wrongsound').get(0).play();
    });

    $("input").change(function() {
        response=$(this).val();
        console.log(response);
        //buttonText = $(this).html();
        correctAnswer = $("#img1").data("correct");
        totalscore = $("#totalscore").text();
        
        if (response === correctAnswer)
        {
            $("#totalscore").text(totalscore * 1 + 1);
            if (Math.random()>.9) 
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
