<?php 
$errors = '';
$myemail = 'support@realbooks.in';//<-----Put Your email address here.  support@realbooks.in
// $p = 'pulostya@fleapo.com';
// if(empty($_POST['name'])  ||
 
//    empty($_POST['email']) ||
//  empty($_POST['contactMsg']) || 
// 	empty($_POST['phoneNo']))
   
// {
//     $errors .= "\n Error: all fields are required";
// }
// else{
	$email_address = $_POST['email']; 
	$companyname = $_POST['companyname']; 
	$name = $_POST['name']; 
	$city = $_POST['city'];
	$phone = $_POST['phone'];
	$enqueryref = $_POST['enqueryref'];
	$message = $_POST['message'];
	
// }

// if (!preg_match(
// "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
// $email_address))
// {
//     $errors .= "\n Error: Invalid email address";
// }


// if (!preg_match(
// "/^[0]?[789]\d{9}$/", 
// $phone))
// {
//     $errors .= "\n Error: Invalid phone no";
// }




if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contact form submission: $name";
	$email_body = "You have received a new message. ".
	" Here are the details:\n <br> 
		Enquiry Purpose: ".$enqueryref." \n <br> 
		Name: ".$name." \n <br> 
		Company Name: ".$companyname." \n <br> 
		Email: ".$email_address ."\n <br> 
		Phone No: ".$phone ."\n <br>
		Message: ".$message ."\n <br>
		City: \n ".$city; 
	
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	$headers .= "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	// mail($p,$email_subject,$email_body,$headers);
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