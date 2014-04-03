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
if (!empty($bytestring)) {
    $now = time();
    $fromip = $_SERVER['REMOTE_ADDR'];
    $sql = "INSERT INTO  commands (fromip,botname,timesent,bytestr) values"
            . " ('$fromip','$botname','$now','$bytestring')";
    error_log($sql);
    mysql_query($sql, $con);
} else
    error_log('empty bytestring');


$sql = "SELECT * FROM sensors WHERE botname = '$botname'";
$result = mysql_query($sql, $con);
if (!$result)
    error_log(mysql_error());
error_log($sql);
$sensors = array();
$now = time();
while ($row = mysql_fetch_array($result)) {
    //console.log(intval($row['timestamp']). ' ' . $now);
    if (intval($row['timestamp']) > $now - 5) {
        $sensors[$row['sensor']] = $row['value'];
        error_log($row['sensor'] . ' ' . $row['value']);
    } else error_log('sensor expired');
}
error_log(json_encode($sensors));
echo json_encode($sensors);
//echo $recordid;
//{ "name": "John" }
$myerror = mysql_error();
if ($myerror) {
    mysql_close($con);
    die($myerror);
}