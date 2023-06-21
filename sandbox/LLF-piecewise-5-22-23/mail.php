<?php
$name = $_POST['fname'+' '+'lname'];
$email = $_POST['email'];
$number = $_POST['phone'];
$message = $_POST['case_details'];

$subject = ['Lux Law Firm - automated Consultation Request'];

$mailheader = "From: ".$name."<".$email.">\r\n";

$recipient = "jwellington91@gmail.com";

mail($recipient, $subject, $message, $mailheader)
/*Github won't run php so this will have to be verified<br>
once on a php supporting host. Also will need thankyou/send confirmation or send failure*/

?>