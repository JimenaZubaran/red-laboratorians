//Autenticacion con Firebase
var config = {
  apiKey: "AIzaSyDgEslLzmClEN53ERhCZn2pQbJC03M-KF4",
  authDomain: "redlaboratorias.firebaseapp.com",
  databaseURL: "https://redlaboratorias.firebaseio.com",
  projectId: "redlaboratorias",
  storageBucket: "redlaboratorias.appspot.com",
  messagingSenderId: "791147202268"
};
firebase.initializeApp(config);

$("#login-button").click(function(e){
  e.preventDefault();
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
  window.location.href = "views/newsfeed.html"
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





//Funcion para gregar comentario en perfil
$("#add-comment").click(function(e){
  e.preventDefault();
  var newComment = $("#new-comment").val();



  //DOM para agregar comentario en perfil
var $commentBox = $("<div />").addClass("comment-box");
var $commentPicture =$ ("<img />").addClass("comment-picture")
var $commentName = $("<h3 />");
var $commentParagraph = $("<p />");
var $commentIcon = $("<i />").addClass("fa fa-heart comment-icons");
var $commentInput = $("<input/>").addClass("comment-input");
var $commentButton = $("<button/>")


//Agregar atributos
$commentPicture.attr("src", "./../assets/images/my-profile.jpg" )
$commentName.text("Paola Torres");
$commentParagraph.html(newComment);
$commentInput.attr("placeholder", "Escribe un comentario");
$commentButton.attr("id", "comment-add");
$commentButton.html("Agregar");

//Agregar párrafo
$commentBox.append($commentPicture);
$commentBox.append($commentName);
$commentBox.append($commentParagraph);
$commentBox.append($commentIcon);
$commentBox.append($commentInput);
$commentBox.append($commentButton);

//Agregar al área de posts
$("#new-posts").prepend($commentBox);


  $("#comment-add").click(function(e){
    e.preventDefault();
    var commentInput = $(".comment-input").val();

    //DOM para agregar comentario en en el post
    var $commentsBox = $("<div />").addClass("comments-box");
    var $commentsPicture =$ ("<img />").addClass("comments-picture")
    var $commentsName = $("<h3 />");
    var $commentsParagraph = $("<p />");
    //var $commentsIcon = $("<i />").addClass("fa fa-heart, comments-icons");
    var $commentsInput = $("<input/>").addClass("commenst-input");
    var $commentsButton = $("<button/>")

    //Agregar atributos
    $commentsPicture.attr("src", "./../assets/images/friend7.jpg" )
    $commentsName.text("Valentina Sánchez");
    $commentsParagraph.html(commentInput);
    $commentsInput.attr("placeholder", "Escribe un comentario");
    $commentsButton.attr("id", "comments-add");
    $commentsButton.html("Agregar");

    //Agregar párrafo
    $commentsBox.append($commentsPicture);
    $commentsBox.append($commentsName);
    $commentsBox.append($commentsParagraph);
    //$commentsBox.append($commentsIcon);
    $commentsBox.append($commentsInput);
    $commentsBox.append($commentsButton);


    //Agregar al área de posts
    $(".comment-box").append($commentsBox);
  });
});



$(document).ready();
