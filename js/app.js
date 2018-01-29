var $userNameInput = $("#username-input");
var $passwordInput = $("#password-input");

function loadPage(){
  $userNameInput.keyup(validateUser);
  $passwordInput.keyup(validateUser);
}



function validateUser (){
var $logInButton = $("#login-button");

if ($userNameInput.val().trim().lenght > 0 &&  $passwordInput.val().trim().lenght > 0) {
  $logInButton.removeAttr("disabled");
  } else {
    $logInButton.attr("disabled", true);
  }
}












$(document).ready(loadPage);
