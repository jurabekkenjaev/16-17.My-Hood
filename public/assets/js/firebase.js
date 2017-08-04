// require = ("../controllers")
console.log("Firebase loaded")

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDG3y33Xmtfr58E4Tkc8D1_TVRSZP4-y8Y",
    authDomain: "neighborhood-174902.firebaseapp.com",
    databaseURL: "https://neighborhood-174902.firebaseio.com",
    projectId: "neighborhood-174902",
    storageBucket: "neighborhood-174902.appspot.com",
    messagingSenderId: "901399671706"
};
firebase.initializeApp(config);

// // Variable to reference the database
// var fullName;
// var email;



// Get all elements from HTML file
var textEmail = $("#textEmail");
var textPassword = $("#textPassword");
var signUpPassword = $("#signUpPassword")
var btnLogin = $("#btnLogin");
var btnSignUp = $("#btnSignUp");
var btnLogout = $("#btn-Logout");
var textFullName = $("#signUpName");

// form validation function 
function addClass(getElem) {
    getElem.classList.add('errDisplay');
}

function removeClass(getElem) {
    getElem.classList.remove('errDisplay');
}


// Add login event
$('.modalContent').on('click', '#btnLogin', function() {
    console.log("clicked login btn");
    var email = $("#textEmail").val().trim()
    console.log("email: " + email)
    var password = textPassword.val();
    var auth = firebase.auth();

    // Sign In
    var promise = auth.signInWithEmailAndPassword(email, password);

    promise.catch(function(e) {
        if (e.code) {
            var getElem = document.querySelector('.errHandle');
            var err = document.getElementById('error');
            addClass(getElem);
            err.innerHTML = e.message;

        } else {

            var submitLogIn = document.querySelector('.submit-LogIn');
            removeClass(getElem);
            submitLogIn.classList.add('btn-logIn');

            // clears input after entry
            textEmail.val("");
            textPassword.val("");
        }
    });



});


// Add signup event
$('#modalSignUpBtn').on('click', function(e) {
    var email = $("#signUpEmail").val().trim()
    console.log("email: " + email);
    var displayName = textFullName.val()
    console.log("displayName : " + displayName)
    var password = signUpPassword.val();
    var auth = firebase.auth();

    // Create User
    var promise = auth.createUserWithEmailAndPassword(email, password);

    promise.catch(function(e) {
        if (e.code) {
            var getElem = document.querySelector('.errHandle');
            var err = document.getElementById('error');
            addClass(getElem);
            err.innerHTML = e.message;

        } else {

            var submitLogIn = document.querySelector('.submit-LogIn');
            removeClass(getElem);
            submitLogIn.classList.add('btn-logIn');
            // window.location = '/search';

            // clears input after entry
            textEmail.val("");
            textPassword.val("");
        }
    });
});

btnLogout.click(function(e) {
    console.log("clicked logout");

    firebase.auth().signOut();

//         // Add a realtime listener
// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if (firebaseUser) {
//         console.log(firebaseUser);
//         btnLogout.removeClass('hide');
//         location.reload(false);
//         window.location = '/search';
//     } else {
//         console.log("You are not logged in");
//         btnLogout.addClass('hide')

//         window.location='/'
//     }
// })

})

firebase.auth().onAuthStateChanged(function(user, error) {
console.log(window.location.pathname)
if (error) {
    console.log(error)
}
  if (user) {
    console.log(user)
    if (window.location.pathname == "/") {
        window.location = "/search"
    }

  } else {
    console.log("Not signed in")
    if (window.location.pathname != "/") {
        window.location = "/"
    }
  }
});

//     // Add a realtime listener
// firebase.auth().onAuthStateChanged(firebaseUser => {
//     if (firebaseUser) {
//         console.log(firebaseUser);
//         btnLogout.removeClass('hide');
//         // location.reload(false);
//         // window.location = '/search';

//     } else {
//         console.log("You are not logged in");
//         btnLogout.addClass('hide')

//         // window.location='/'
//     }
// })