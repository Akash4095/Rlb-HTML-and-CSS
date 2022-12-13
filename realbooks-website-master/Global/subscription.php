<?php 
$errors = '';
$myemail = 'abhishek@realbooks.in';//<-----Put Your email address here.
$n = 'neeraj@realbooks.in';
$m = 'abhishek.gujral@gmail.com';
// if(
//    empty($_POST['email']))
   
// {
//     $errors .= "\n Error: all fields are required";
// }
// else{
// 	 
// }

// if (!preg_match(
// "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
// $email_address))
// {
//     $errors .= "\n Error: Invalid email address";
// }
$email_address = $_POST['email'];


if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Newsletter Subscription:- RealBooks";
	$email_body = "You have received a new message.<br> ".
	" Here are the details:\n <br><br> Email: ".$email_address; 
	
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= "From: $email_address\n"; 
	$headers .= "Reply-To: $myemail";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: index.php');
	mail($n,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: index.php');
	mail($m,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: index.php');
	
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>
</body>
</html>
