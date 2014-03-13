function init() {
    Tabletop.init({key: '0AicSp9ajiT-GdFR1MmJ4YnhHZ2tIcUpLSTFJWTJ0dGc',
        callback: loadquiz,
        simpleSheet: true});
}

function loadquiz(data) {
    $("body").data("quiz", data);
    var countries = [];
    for (var i = 0; i < data.length; i++)
    {
        countries.push(data[i].answer);
    }
    console.log(countries);
//countries = ["Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Angola","Antarctica","Argentina","American Samoa","Austria","Australia","Aruba","Ã…land","Azerbaijan","Bosnia and Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Saint BarthÃ©lemy","Bermuda","Brunei","Bolivia","Bonaire","Brazil","Bahamas","Bhutan","Bouvet Island","Botswana","Belarus","Belize","Canada","Cocos [Keeling] Islands","Congo","Central African Republic","Republic of the Congo","Switzerland","Ivory Coast","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Curacao","Christmas Island","Cyprus","Czechia","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji","Falkland Islands","Micronesia","Faroe Islands","France","Gabon","United Kingdom","Grenada","Georgia","French Guiana","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Guadeloupe","Equatorial Guinea","Greece","South Georgia and the South Sandwich Islands","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Heard Island and McDonald Islands","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","North Korea","South Korea","Kuwait","Cayman Islands","Kazakhstan","Laos","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova","Montenegro","Saint Martin","Madagascar","Marshall Islands","Macedonia","Mali","Myanmar [Burma]","Mongolia","Macao","Northern Mariana Islands","Martinique","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Norfolk Island","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn Islands","Puerto Rico","Palestine","Portugal","Palau","Paraguay","Qatar","RÃ©union","Romania","Serbia","Russia","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","Saint Helena","Slovenia","Svalbard and Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","South Sudan","SÃ£o TomÃ© and PrÃ­ncipe","El Salvador","Sint Maarten","Syria","Swaziland","Turks and Caicos Islands","Chad","French Southern Territories","Togo","Thailand","Tajikistan","Tokelau","East Timor","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad and Tobago","Tuvalu","Taiwan","Tanzania","Ukraine","Uganda","U.S. Minor Outlying Islands","United States","Uruguay","Uzbekistan","Vatican City","Saint Vincent and the Grenadines","Venezuela","British Virgin Islands","U.S. Virgin Islands","Vietnam","Vanuatu","Wallis and Futuna","Samoa","Kosovo","Yemen","Mayotte","South Africa","Zambia","Zimbabwe"]
    $('.example-countries .typeahead').typeahead({
        name: 'countries',
        local: countries,
        limit: 10
    });
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
