<?php

$bytestring = $_REQUEST['bytestring'];
$botname = $_REQUEST['botname'];

$con = mysql_connect("localhost", "root", "saasmath");
if (!$con) {
    die('Could not connect:' .
            mysql_error());
}

$bytestring = mysql_real_escape_string($bytestring);
$botname = mysql_real_escape_string($botname);

mysql_select_db("botDB", $con);
$myreferer = $_SERVER[HTTP_REFERER];
$now = time();

$fromip = $_SERVER['REMOTE_ADDR'];
$sql = "INSERT INTO  commands (fromip,botname,timesent,bytestr) values"
        . " ('$fromip','$botname','$now','$bytestring')";

mysql_query($sql, $con);

$recordid = mysql_insert_id($con);

echo $recordid;
$myerror = mysql_error();
if ($myerror) {
    mysql_close($con);
    die($myerror);
}