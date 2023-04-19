<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    
    $email_form = 'example@gmail.com';
    $email_subject = 'Test Message';
    $email_body = "User Name: $name.\n".
                     "User Email: $visitor_email.\n".
                         "Message: $message.\n";
                         
    $to = "example@gmail.com";
    $headers = "From: $email_form \r\n";
    $headers = "Reply-To: $visitor_email \r\n";
    
    mail($to, $email_subject, $email_body, $headers);
    header("Location: contact.html");
?>