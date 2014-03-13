function sendCommand(bytestring) {
    if (bytestring == undefined)
        bytestring = '';
    pagename = $('body').data('pagename');
    command = 'http://saasmath.seattleacademy.org/saasbot/writebot.php?';
    command = command + 'botname=' + $('#botname').val();
    command = command + '&bytestring=' + bytestring;
    command = command + '&username=' + username;
    command = command + '&pagename=' + pagename;
    $.getJSON(command, function(json) {
        $('#result').text(JSON.stringify(json, null, 4));
    });
}

function lockout() {
    username = $('#username').val();
    pagename = Math.floor(Math.random() * 10000) + 1;
    $('body').data('pagename', pagename);
    command = 'http://saasmath.seattleacademy.org/saasbot/lockbot.php?';
    command = command + 'botname=' + $('#botname').val();
    command = command + '&username=' + username;
    command = command + '&pagename=' + pagename;
    console.log(command);

    $.getJSON(command, function(json) {
        //console.log(json);
        //$('#result').text(JSON.stringify(json, null, 4));
    });
}

$(document).ready(function() {

    $("[data-command]").click(function(event) {
        command = $(this).data('command');
        sendCommand(command);
        event.preventDefault();

    });


    $('body').keydown(function(event) {



        if (event.which === 49) //1 Play Song1
        {
            sendCommand('140,0,2,55,10,67,15,141,0');
        }

        if (event.which === 50) //2 Play Song 2
        {
            sendCommand('140,0,3,60,20,72,15,84,10,141,0');
        }

        if (event.which === 32) //space bar STOP
        {
            sendCommand('145,0,0,0,0');
        }

    });

});
