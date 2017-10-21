<?php
    require 'assets/lib/phpmailer/PHPMailerAutoload.php';

    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->Host = "relay-hosting.secureserver.net";
    $mail->SMTPDebug = 0; // enables SMTP debug information (for testing)
    $mail->SMTPAuth = false; // enable SMTP authentication
    $mail->SMTPSecure = 'tls';
    $mail->Port = 25;

    $to = "connect@tenniscentral.net";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name']; 
    // $headers = "From: $from"; 
    $subject = "You have a message sent from Tennis Central Pods site"; 
    // $fields = array(); 
    // $fields{"name"} = "name"; 
    // $fields{"email"} = "email"; 
    // $fields{"message"} = "message";

    $mail->addAddress($to);
    $mail->setFrom($from, $name);
    $mail->Subject = $subject;
    $body = "Here is what was sent:\n\n";
    foreach($fields as $a => $b) {
        $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); 
    }
    $mail->Body = $body;

    // $send = mail($to, $subject, $body, $headers);
    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }
?>