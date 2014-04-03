<?php

$con = mysql_connect("localhost", "root", "saasmath");
if (!$con) {
    die('Could not connect:' .
            mysql_error());
}



$bytestring = mysql_real_escape_string($_REQUEST['bytestring']);
$botname = mysql_real_escape_string($_REQUEST['botname']);
$username = '-';
if (!empty($_REQUEST['username']))
    $username = mysql_real_escape_string($_REQUEST['username']);
$pagename = '-';
if (!empty($_REQUEST['pagename']))
    $pagename = mysql_real_escape_string($_REQUEST['pagename']);

mysql_select_db("botDB", $con);

$sql = "SELECT * FROM lockout WHERE botname = '$botname'";
//error_log($sql);
$result = mysql_query($sql, $con);
if (!$result)
    error_log(mysql_error());
$row = mysql_fetch_array($result);
if (!empty($row)) {
    $now = time();
    $locktimestamp = $row['timestamp'];
    $lockusername = $row['username'];
    $lockpagename = $row['pagename'];
    //error_log($locktimestamp . ' '. $lockusername , ' '. $lockpagename);
    //error_log($lockusername.' '.$username);
    if (intval($locktimestamp) > $now - 30) {
        //error_log('locked out');
        if ($lockusername != $username) {
            die('{ "error": "bot is blocked by: ' . $lockusername . '" }');
        }
        if ($lockpagename != $pagename) {
            die('{ "error": "bot is blocked by page: ' . $lockpagename . '" }');
        }
    }
}

if (!empty($bytestring)) {
    $now = time();
    $fromip = $_SERVER['REMOTE_ADDR'];
    $sql = "INSERT INTO  commands (fromip,botname,timesent,bytestr) values"
            . " ('$fromip','$botname','$now','$bytestring')";
    //error_log($sql);
    mysql_query($sql, $con);
} 
// else error_log('empty bytestring');
    $sql = "SELECT * FROM sensors WHERE botname = '$botname'";
$result = mysql_query($sql, $con);
if (!$result)
    error_log(mysql_error());
//error_log($sql);
$sensors = array();
$now = time();
while ($row = mysql_fetch_array($result)) {
    //console.log(intval($row['timestamp']). ' ' . $now);
    if (intval($row['timestamp']) > $now - 5) {
        $sensors[$row['sensor']] = $row['value'];
        //error_log($row['sensor'] . ' ' . $row['value']);
    }
    //else error_log('sensor expired');
}
//error_log(json_encode($sensors));
echo json_encode($sensors);
//echo $recordid;
//{ "name": "John" }
$myerror = mysql_error();
if ($myerror) {
    mysql_close($con);
    die($myerror);
}