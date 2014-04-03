<?php

$con = mysql_connect("localhost", "root", "saasmath");
if (!$con) {
    die('Could not connect:' .
            mysql_error());
}


mysql_select_db("botDB", $con);

$now = time();



$sql = "SELECT * FROM sensors WHERE sensor = 'VOLTAGE'";

$result = mysql_query($sql, $con);
if (!$result)
    echo mysql_error();


while ($row = mysql_fetch_array($result)) {
    if ($now - intval($row['timestamp']) < 5) {
        echo "<tr class = 'success'>";
    } else {
        echo "<tr class = 'danger'>";
    }

    echo "<td>" . strval($now - $row['timestamp']) . "</td>";
    echo "<td>" . $row['botname'] . "</td>";
    echo "<td>" . date('H:i:s', $row['timestamp']) . "</td>";
    echo "<td>" . $row['value'] . "</td>";
    echo "</tr>
        ";
}




