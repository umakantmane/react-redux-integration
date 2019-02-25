$(document).ready(function(){

		$('.userDiv').show();
		$('.pwdDiv').hide();
		$('.validUser').hide();
		$('.userDiv').removeClass('error');
		$('.pwdDiv').removeClass('error');
		$('#loginBtn').text('CONTINUE');
		$('.forgot-password').animate({'opacity':'1'});

		$('.userBack').tooltip({});
		$('.tooltipped').tooltip({});

		 // Login - Forgot password toggle 
		  $('.forgot-password').click(function(){

		  	// disabling now
		  	// return false;

		    $('.login-form').hide();
		    $('.forgot-password-form').fadeIn();
		$('.forgot-password').animate({'opacity':'0'});
		  });


		//  reset password button action
		  $('#reset-form').click(function(){

	  		em = $('#emailid').val();
			if(em == '' || em == null || em == undefined || validateEmail(em) != true){
				$('.forgotDiv').addClass('error');
				$('.forgotDiv .errorMsg').text("Awww, we're sorry. Please enter valid email id");
				return false;
			}
			else{
			    $('.forgot-password-form').hide();
			    $('.login-form').fadeIn();
			    }
		  })

		// validate email id
		 function validateEmail($email) {
		  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		  return emailReg.test( $email );
		}


		// go back and change user
		  $('.userBack').on('click', function(){
		  		$('.userDiv, .pwdDiv').removeClass('error');
				$('.userDiv').show();
				$('.validUser span').text('');
				$('.validUser').hide()
				$('#loginBtn').text('CONTINUE');
				$('.pwdDiv').hide();
		  })

				// if($('.userDiv input').val() == '' || $('.userDiv input').val() == null || $('.userDiv input').val() == undefined){
				// 	$('.userDiv').addClass('error');
				// 	$('.userDiv .errorMsg').text("Awww, we're sorry. Please enter username");
				// 	return false;
				// }
				// else{
				// 	$('.validUser span').text($('.userDiv input').val());
				// 	$('.userDiv').removeClass('error');
				// 	$('.userDiv').hide();
				// 	$('.validUser span').text(un);
				// 	$('.validUser').show()
				// 	$('#loginBtn').text('LOG IN');
				// 	$('.pwdDiv').show();
				// 	return false;
				// }

		// login action
		var un;
		var pw;
		$('#loginBtn').on('click', function(){
			un = $('.userDiv input').val();
			pw = $('.pwdDiv input').val();

			if(!$('.pwdDiv').is(':visible')){
				if(un == '' || un == null || un == undefined){
					$('.userDiv').addClass('error');
					$('.userDiv .errorMsg').text("Awww, we're sorry. Please enter username");
					return false;
				}
				else{
					$('.userDiv').removeClass('error');
					$('.userDiv').hide();
					$('.validUser span').text(un);
					$('.validUser').show()
					$('#loginBtn').text('LOG IN');
					$('.pwdDiv').show();
					return false;
				}
			}
			else{
				$('#loginBtn').text('LOG IN');
				if(pw == '' || pw == null || pw == undefined){
					$('.pwdDiv').addClass('error');
					$('.pwdDiv .errorMsg').text("Awww, we're sorry. Please enter password");
					return false;
				}
				else{
					$('.pwdDiv').removeClass('error');
					$('.userDiv').hide();
					window.location = "dashboard.html";
					return false;
				}
			}

		})



		// view password toggle
		$('.viewPassword').on('click', function(){
			var pwd = $('#password').attr('type');
			if(pwd == 'password') {
				$('#password').attr('type', 'text');
				$('#password').parent().find('.viewPassword').addClass('active');
			}
			else {
				$('#password').attr('type', 'password');
				$('#password').parent().find('.viewPassword').removeClass('active');
			}
			}
		)

})