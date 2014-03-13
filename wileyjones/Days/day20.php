<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
require_once $root.'/../swiftmailer/lib/swift_required.php';
echo('<pre>');
print_r ($_REQUEST);
$request_body = print_r($_REQUEST,true);
$server_body = print_r($_SERVER,true);
echo($request_body.$server_body);
//exit();
$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
  ->setUsername('wileyjones@seattleacademy.org')
  ->setPassword('abatement');
 
$mailer = Swift_Mailer::newInstance($transport);
 
$message = Swift_Message::newInstance('Faculty Quiz Results')
  ->setFrom(array('saasmath@gmail.com' => 'Wiley Jones'))
  ->setTo(array('wileyjones@seattleacademy.org', $_REQUEST['user_email']))
  ->setBody("Score: " .$_REQUEST["score"]. " Time: " .$_REQUEST["time"]. " seconds Questions Answered: " .$_REQUEST["question"]);
 
$result = $mailer->send($message);
echo $result;
?>