/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */




$(document).ready(function() {
//source file is https://docs.google.com/spreadsheet/ccc?key=0Ak0qDiMLT3XddHlNempadUs1djdkQ0tFLWF6ci1rUUE	
    $(function listBooks() {
        $.getJSON("https://spreadsheets.google.com/feeds/list/0Ak0qDiMLT3XddHlNempadUs1djdkQ0tFLWF6ci1rUUE/od6/public/values?alt=json-in-script&callback=?",
                function(data) {
                    $('div#book-list').append('<ul class="items"></ul>');
                    $.each(data.feed.entry, function(i, entry) {
                        var item = '<span style="display:none">' + entry.id.$t + '</span>';
                        item += '<img src="http://covers.openlibrary.org/b/isbn/' + entry.gsx$isbn.$t + '-S.jpg"/>';
                        item += '<span class="meta"><a href="http://www.worldcat.org/isbn/' + entry.gsx$isbn.$t + '">' + entry.title.$t + '</a>';
                        item += '<br/>Author: ' + entry.gsx$author.$t;
                        if (entry.gsx$notes.$t) {
                            item += '<br/>Description: ' + entry.gsx$notes.$t;
                        }
                        $('.items').append('<li>' + item + '</span></li>');
                    });
                });
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
            "image": "goldfish.jpg",
            "answer": "goldfish",
            "options": [
                "bull",
                "goldfish",
                "Cat Struggling",
                "bulldog"
            ]
        },
        {
            "image": "http://i.imgur.com/oIEc0BD.gif",
            "answer": "Cat Struggling",
            "options": [
                "bull",
                "goldfish",
                "Cat Struggling",
                "bulldog"
            ]
        }

    ]
};