var config = {
  apiKey: "AIzaSyDgEslLzmClEN53ERhCZn2pQbJC03M-KF4",
  authDomain: "redlaboratorias.firebaseapp.com",
  databaseURL: "https://redlaboratorias.firebaseio.com",
  projectId: "redlaboratorias",
  storageBucket: "redlaboratorias.appspot.com",
  messagingSenderId: "791147202268"
};
firebase.initializeApp(config);

$("#login-button").click(function(){
  authGoogle();
})

function authGoogle(){
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(result);
  // ...
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  console.log(errorCode);
  var errorMessage = error.message;
  console.log(errorMessage);
  // The email of the user's account used.
  var email = error.email;
  console.log(email);
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(credential);
  // ...
});
}

/*Funcion para autenticar log in
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

$("#add-coment").click(function(e){
  e.preventDefault();
  var $newComment = $("#new-comment").val();


  //DOM para agregar comentario en perfil
var $commentBox = $("<div />").addClass("comment-box");
var $commentName = $("<h3 />");
var $commentParagraph = $("<p />");

//Agregar atributos
$commentName.text("nombre");
$commentParagraph.text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco");

//Agregar párrafo
$commentBox.append($commentName);
$commentBox.append($commentParagraph);

//Agregar al área de posts
$("#")
})
*/
