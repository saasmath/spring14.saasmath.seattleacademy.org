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
  ->setUsername('saassoftwaredevelopment@gmail.com')
  ->setPassword('saasmath1234');
 
$mailer = Swift_Mailer::newInstance($transport);
 
$message = Swift_Message::newInstance('Fancy Title')
  ->setFrom(array('wileyjones@seattleacademy.org' => 'Wiley Jones'))
  ->setTo(array('ganderson@seattleacademy.org','wileyjones@seattleacademy.org',$_REQUEST['user_email']))
  ->setBody("You answered ".$request_body. " from ". $server_body);
 
$result = $mailer->send($message);
echo $result;
?>