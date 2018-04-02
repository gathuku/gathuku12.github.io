// Initialize Firebase (REPLACE WITH YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBOknGi_Cbnt7PE178IscUtmlNOMJVrm4M",
    authDomain: "gathuku-6ffaa.firebaseapp.com",
    databaseURL: "https://gathuku-6ffaa.firebaseio.com",
    projectId: "gathuku-6ffaa",
    storageBucket: "gathuku-6ffaa.appspot.com",
    messagingSenderId: "1038155577519"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('send').addEventListener('click', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    // Remember to add all the values in your contact form here
    var name = getInputVal('name');
    var phone = getInputVal('phn');
    var email = getInputVal('email');
    
    var message = getInputVal('message');

    // Save message
    // Remember to add all variable declared above here
    saveMessage(name, phone, email,  message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    //Remember to add some CSS to that
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form - delete form data after submit
    document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase function
function saveMessage(name, phone, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        phone:phone,
        email:email,
        message:message
    });
}
