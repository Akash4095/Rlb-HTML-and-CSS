
$(document).ready(function () {
    $('#enquireSuccess').hide();
    $('#enquiresubmit').click(function () {
        var name = $.trim($('#name').val()),
            enqueryref = $.trim($("#enqueryDDBtnTxt").text()),
            companyname = $.trim($('#companyname').val()),
            city = $.trim($('#city').val()),
            sEmail = $.trim($('#email').val()),
            message = $.trim($('#message').val()),
            sphone = $.trim($('#phone').val());
        // Checking Empty Fields
        if (!validateEmail(sEmail) && sEmail!="") {
            alert('Invalid Email Address');
            $('#email').val("")
            e.preventDefault();
        }else if (!validateMobile(sphone) && sphone!="") {
            alert('Give 10 digit Mobile Number only');
            $('#phone').val("")
            e.preventDefault();
        }
        if (validateMobile(sphone) && validateEmail(sEmail) 
            && name != ""
            && companyname != ""
            && sEmail != ""
            && sphone != ""
            ) {
                $("#enquiresubmit").attr("disabled",true).css({"opacity":"0.5"})
                // console.log({ "name": name, "companyname": companyname, "email": sEmail, "phone": sphone, "city": city })
            $.ajax({
                type: "POST",
                url: "../enquiry-post.php",
                data: { "name": name, "companyname": companyname, "email": sEmail, "phone": sphone, "city": city, "enqueryref": enqueryref, "message": message },
                success:function(){
                    $("#enquiresubmit").removeAttr("disabled").css({"opacity":"1"})
                    $('#enquiereSuccess').show();
                    $("#enquireForm").trigger("reset");
                    $("#enqueryDDBtnTxt").text("For my Company")
                    $("#enqueryDDBtn .selectedDDItem").removeClass("selectedDDItem selectedDDItemColor")
                    $("#enqueryDDBtn .drodownItems:first").addClass("selectedDDItem selectedDDItemColor")
                    setTimeout(function(){
                        $('#enquiereSuccess').hide()
                    },3000)
                },
                error:function(error){
                    console.log("=error="+error);
                    
                }
            });
        }
    });
    $('.global select ').change(function () {
        var s = $('.global select option:selected').val();

        if (s == "global") {
            document.location.href = 'https://realbooks.in/Global/index.php';
        }
        else {
            document.location.href = 'https://realbooks.in/index.php';
        }
    });


    $('.gg').click(function () {
        document.location.href = 'https://realbooks.in/Global/index.php';
    });
    $('.ii').click(function () {
        document.location.href = 'https://realbooks.in/index.php';
    });
    $('#newsSubmit').click(function () {
        var sEmail = $('input[name="email"]').val();
        if ($.trim(sEmail).length == 0) {
            alert('Email Id is mandatory');
            $('input[name="email"]').focus();
            e.preventDefault();
        }
        if (!validateEmail(sEmail)) {
            alert('Invalid Email Address');
            $('input[name="email"]').focus();
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            $.ajax({
                type: "POST",
                url: "subscription.php",
                data: ({ "email": sEmail }),
            });
            $('#news').html('Thanks for your subscription!');
            $("#news").animate({ left: '100px', top: '100px' }, 500);
        }
    });
    $(".drodownItems").click(function(e){
        $(e.currentTarget).parent().find(".drodownItems").removeClass("selectedDDItem selectedDDItemColor");
        $(e.currentTarget).addClass("selectedDDItem selectedDDItemColor").parents(".dropdowncutom:first").find(".dropdowncutomBtnTxt").text($(e.currentTarget).attr("value"))
    })
    $(".drodownItems").hover(function(e){
        $(e.currentTarget).parent().find(".drodownItems").removeClass("selectedDDItemColor");
        $(e.currentTarget).addClass("selectedDDItemColor")
    })
    $(".pdfThumnailContainer").click(function(){
        $(this).addClass("fullWidthPdf")
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
    
function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}