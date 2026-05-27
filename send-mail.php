<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "devendra.planeteretail@gmail.com";

    $email_subject = "Portfolio Contact: " . $subject;

    $email_body = "
    Name: $name

    Email: $email

    Subject: $subject

    Message:
    $message
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $email_subject, $email_body, $headers)) {

        header("Location: ./?status=success");

    } else {

        header("Location: ./?status=error");

    }

    exit();

} else {

    header("Location: ./");
    exit();

}

?>