<?php
$botname = $_REQUEST['botname'];

$con = mysql_connect("localhost", "root", "saasmath");
if (!$con) {
    error_log('Could not connect:' .
            mysql_error());
}

$botname = mysql_real_escape_string($botname);

mysql_select_db("botDB", $con);
$now = time();


$sql = "UPDATE commands SET timereceived='$now' WHERE botname='$botname'";
$result = mysql_query($sql, $con);
//error_log('cleared pending commands');

$myerror = mysql_error();
if ($myerror) {
    mysql_close($con);
    error_log($myerror);
}

