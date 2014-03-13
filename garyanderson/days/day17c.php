<?php

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
require_once $root.'/../swiftmailer/lib/swift_required.php';

$age = 52;
echo("Hello World! I am ".$age." years old!");
echo('<pre>');
print_r($_REQUEST);
print_r($_SERVER);
$request_body = print_r($_REQUEST,true);
$server_body = print_r($_SERVER,true);
$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
  ->setUsername('saassoftwaredevelopment@gmail.com')
  ->setPassword('saasmath1234');
 
$mailer = Swift_Mailer::newInstance($transport);
 
$message = Swift_Message::newInstance('Software Development Test')
  ->setFrom(array('ganderson@seattleacademy.org' => 'Gary Anderson Test'))
  ->setTo(array('ganderson@seattleacademy.org','saasmath@gmail.com',$_REQUEST['user_email']))
  ->setBody("You answered ".$request_body. " from ". $server_body);
 
$result = $mailer->send($message);

