// var name;
// var email;
// var phone;
// var text;
// $(document).ready(function(){
// 	$('#contactSuccess').hide();
// 	$('#contactsubmit').click(function(){
// 		if ($('#name').val().length !== 0 && $('#email').val().length !== 0 && $('#phone').val().length !== 0 ) {
//             name = $('#name').val();
//             text = $('#text').val();
//             email = $('#email').val();
//             phone = $('#phone').val();
            
        
// 		    $.ajax({
// 	            type: "POST",
// 	            url: "contact-post.php",
// 	            data: ({ "name": name, "email": email, "phone": phone, "text": text }),
// 	            // success: function( data ) {
// 	            //  alert("data: "+ data)
// 	            //  },
// 	            // error: function(xhr, status, error) {
// 	            //    alert("blank data")
// 	            // },
// 	        });
// 	         $('#contactForm').hide('fast');

//             $('#contactSuccess').fadeIn(300);
// 	    }
// 	});
// });



var name;
var email;
var phone;
var text;
$(document).ready(function(e) {
	$('#contactSuccess').hide();
$('#contactsubmit').click(function() {
var sEmail = $('#email').val();
var sphone = $('#phone').val();
// Checking Empty Fields
if ($.trim(sEmail).length == 0 || $("#name").val()=="" || $("#phone").val().length== 0) {
alert('All fields are mandatory');
e.preventDefault();
}
// if ($("#phone").val().length !== 10) {
// alert('Give 10 digit Mobile Number only');
// e.preventDefault();
// }
if (validateEmail(sEmail)) {
alert('Your Email Id is : ' + sEmail);

}
else {
alert('Invalid Email Address');
e.preventDefault();
}
if (validateMobile(sphone)) {
alert("Your Mobile Number : " + sphone);

}
else {
alert('Give 10 digit Mobile Number only');
e.preventDefault();
}
if(validateMobile(sphone) && validateEmail(sEmail) && $("#phone").val().length == 10 && $("#name").val().length !== 0 ){
			name = $('#name').val();
            text = $('#text').val();
            email = $('#email').val();
            phone = $('#phone').val();
		    $.ajax({
	            type: "POST",
	            url: "contact-post.php",
	            data: ({ "name": name, "email": email, "phone": phone, "text": text }),
	        });
	         $('#contactForm').hide('fast');

            $('#contactSuccess').show('slow');
}
});
});
// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
if (filter.test(sEmail)) {
return true;
}
else {
return false;
}
}
function validateMobile(sphone) {
        var mobile = document.getElementById("phone").value;
        var pattern = /^\d{10}$/;
        if (pattern.test(mobile)) {
            // alert("Your mobile number : " + mobile);
            return true;
        }
        // alert("It is not valid mobile number.input 10 digits number!");
        return false;
    }
