<?php

//print_r($_REQUEST);
$VOLTAGE = $_REQUEST['VOLTAGE'];
//$CHARGING_STATE = $_REQUEST['CHARGING_STATE'];
$botname = $_REQUEST['botname'];
$sensors = $_REQUEST['sensors'];
##error_log($sensors);
//$botip = 'first';
//$VOLTAGE = 13001;
$con = mysql_connect("localhost", "root", "saasmath");
if (!$con) {
    error_log('Could not connect:' .
            mysql_error());
}
$VOLTAGE = mysql_real_escape_string($VOLTAGE);
$botname = mysql_real_escape_string($botname);

mysql_select_db("botDB", $con);
$now = time();

$fromip = $_SERVER['REMOTE_ADDR'];

$sensorobj = json_decode($sensors);
foreach ($sensorobj as $key => $value) {
    //error_log($key . ' ' . $value);
    $sql = "INSERT INTO  sensors (botname,sensor,value,timestamp) values"
            . " ('$botname','$key','$value','$now')"
            . "ON DUPLICATE KEY UPDATE value = '$value' , timestamp = '$now'";
    mysql_query($sql, $con);

    //$recordid = mysql_insert_id($con);
}


//$sql = "INSERT INTO  sensors (botname,sensor,value,timestamp) values"
//        . " ('$botname','VOLTAGE','$VOLTAGE','$now')"
//        . "ON DUPLICATE KEY UPDATE value = '$VOLTAGE' , timestamp = '$now'";
//print_r ($sql);




$sql = "SELECT * FROM commands WHERE botname = '$botname' and timereceived is NULL ORDER BY id DESC LIMIT 1";

$result = mysql_query($sql, $con);
if (!$result)
    error_log( mysql_error());

$row = mysql_fetch_row($result);

if (sizeof($row) > 0) {
    print_r($row[5]);
    $sql = "UPDATE commands SET timereceived='$now' WHERE id='$row[0]'";
    $result = mysql_query($sql, $con);
    
    //clear out other commands
    $sql = "UPDATE commands SET timereceived=1 WHERE botname='$botname' and timereceived is NULL";
    $result = mysql_query($sql, $con);
    //error_log('cleared pending commands');
};



$myerror = mysql_error();
if ($myerror) {
    mysql_close($con);
    error_log($myerror);
}

