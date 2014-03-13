/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function() {

    $("#q1").click(function() {
        $("#img1").attr("src", "seahawks.png");
        $("#img1").data("correct", "Seattle Seahawks");
        $("#b1").html("Seattle Seahawks");
        $("#b2").html("Atlanta Falcons");
        $("#b3").html("Baltimore Ravens");
        $("#b4").html("New England Patriots");
    });


    $("#q2").click(function() {
        $("#img1").attr("src", "bills.jpeg");
        $("#img1").data("correct", "Buffalo Bills");
        $("#b1").html("Cleveland Browns");
        $("#b2").html("Jacksonville Jaguars");
        $("#b3").html("Buffalo Bills");
        $("#b4").html("Green Bay Packers");
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
            "image": "seahawks.png",
            "answer": "Seattle Seahawks",
            "options": [
                "Seattle Seahawks",
                "Atlanta Falcons",
                "Baltimore Ravens",
                "New England Patriots"
            ]
        },
        {
            "image": "bills.jpeg",
            "answer": "Buffalo Bills",
            "options": [
                "Clevelands Browns",
                "Jacksonville Jaguars",
                "Buffalo Bills",
                "Green Bay Packers"
            ]
        }

    ]
};

