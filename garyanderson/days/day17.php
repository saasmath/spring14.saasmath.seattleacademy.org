<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
require_once $root.'/../swiftmailer/lib/swift_required.php';
$x = 43;
echo('42 + 1 is '.$x);
echo ('<pre>');
print_r($_REQUEST);
$email_address = print_r($_REQUEST['email_address'],true);
exit();
print_r($_SERVER);

$request_body = print_r($_REQUEST,true);
$server_body = print_r($_SERVER,true);

$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
  ->setUsername('saassoftwaredevelopment@gmail.com')
  ->setPassword('saasmath1234');

$mailer = Swift_Mailer::newInstance($transport);
 
$message = Swift_Message::newInstance('Worksheet results')
  ->setFrom(array('saasmath@gmail.com' => 'Gary Anderson'))
  ->setTo(array('ganderson@seattleacademy.org'.$email_address))
  ->setBody("You answered ".$request_body. " from ". $server_body);