            $(document).ready(function() {
 
 
 
 
                $("#q1").click(function() {
                    $("#img1").attr("src", "Chechen_flag.gif");
                    $("#img1").data("correct", "Chechnya");
                    $("#b1").html("Chechnya");
                    $("#b2").html("Transnistria");
                    $("#b3").html("Abkhazia");
                    $("#b4").html("Kurdistan");
                });
 
 
                $("#q2").click(function() {
                    $("#img1").attr("src", "Flag_of_Transnistria_(state).svg");
                    $("#img1").data("correct", "Transnistria");
                    $("#b1").html("South Ossetia");
                    $("#b2").html("Kurdistan");
                    $("#b3").html("Transnistria");
                    $("#b4").html("Nagorno-Karabakh");
                });
                
                $("#q3").click(function() {
                    $("#img1").attr("src", "Flag_of_Transnistria_(state).svg");
                    $("#img1").data("correct", "T")
                }
 
                (".ans").click(function() {
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