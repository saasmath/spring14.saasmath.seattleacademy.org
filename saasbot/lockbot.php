<?php

$con = mysql_connect("localhost", "root", "saasmath");
if (!$con) {
    die('Could not connect:' .
            mysql_error());
}

$botname = mysql_real_escape_string($_REQUEST['botname']);
$username = mysql_real_escape_string($_REQUEST['username']);
$pagename = mysql_real_escape_string($_REQUEST['pagename']);

mysql_select_db("botDB", $con);

$now = time();
$sql = "INSERT INTO  lockout (botname,username,pagename,timestamp) values"
        . " ('$botname','$username','$pagename','$now')"
        . "ON DUPLICATE KEY UPDATE " 
        . "username = '$username',pagename = '$pagename',timestamp = '$now'";

mysql_query($sql, $con);
error_log($sql);

$myerror = mysql_error();
if ($myerror) {
    mysql_close($con);
    die($myerror);
}
echo '{}'; //return an empty json string for now