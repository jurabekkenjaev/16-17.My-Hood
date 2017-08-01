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
const textEmail = $("#textEmail");
const textPassword = $("#textPassword");
const btnLogin = $("#btnLogin");
const btnSignUp = $("#btnSignUp");
const btnLogout = $("#btnLogout");

// form validation function 
function addClass(getElem) {
    getElem.classList.add('errDisplay');
}

function removeClass(getElem) {
    getElem.classList.remove('errDisplay');
}

// Add login event
btnLogin.click(function() {
    console.log("clicked the login btn");
    const email = textEmail.val().trim();
    const password = textPassword.val().trim();
    const auth = firebase.auth();

    // Sign In 
    const promise = auth.signInWithEmailAndPassword(email, password);
    //promise.catch(e => console.log('line34 message: ', e.message +"login event" + e));
    promise.catch(function(e) {
        if (e.code) {
            var getElem = document.querySelector('.errHandle');
            var err = document.getElementById('error');
            addClass(getElem);
            err.innerHTML = e.message;

        } else {
    
            var submitLogIn = document.querySelector('submit-LogIn');
            removeClass(getElem);
            submitLogIn.classList.add('btn-logIn');

            // clears input after entry
            textEmail.val("");
            textPassword.val("");
        }
    });
});



// Add signup event
btnSignUp.click(function() {
    console.log("clicked Signup btn");
    const fullName = textfullName.val().trim
    const email = textEmail.val().trim;
    const password = textPassword.val().trim;
    const auth = firebase.auth();

    // Create User
    const promise = auth.createUserWithEmailAndPassword(email, password);

    promise.catch(function(e) {
        if (e.code) {
            var getElem = document.querySelector('.errHandle');
            var err = document.getElementById('error');
            addClass(getElem)
            err.innerHTML = e.message;

        } else {
            var getElem = document.querySelector('.errHandle');
            var submitLogIn = document.querySelector('submit-LogIn')
            getElem.classList.remove('errDisplay');
            submitLogIn.classList.add('btn-logIn');

            // clears input after entry
            textEmail.val("");
            textPassword.val("");
        }
    });
});

btnLogout.click(function(e) {
    console.log("clicked logout");

    firebase.auth().signOut();

})


// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
        btnLogout.removeClass('hide');
    } else {
        console.log("You are not logged in");
        btnLogout.addClass('hide')
    }
})


//------------- Google Maps Home Page--------------------

var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7963069, lng: -74.1082761 },
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Your Location');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}