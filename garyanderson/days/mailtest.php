<?php
require_once '../../../swiftmailer/lib/swift_required.php';


$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
  ->setUsername('saasmath@gmail.com')
  ->setPassword('Theta6Xi');

$mailer = Swift_Mailer::newInstance($transport);

$message = Swift_Message::newInstance('Worksheet results')
  ->setFrom(array('saasmath@gmail.com' => 'Gary Anderson'))
  ->setTo(array('ganderson@seattleacademy.org','saasmath@gmail.com','saasmath@hotmail.com'))
  ->setBody('This is a test mail.');

$result = $mailer->send($message);
echo $result;
?>
