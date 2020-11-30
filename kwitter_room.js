
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDkFC5U8wpEZepYRIQTQIErgijc34CsY1g",
      authDomain: "kwitter-ab9b1.firebaseapp.com",
      databaseURL: "https://kwitter-ab9b1.firebaseio.com",
      projectId: "kwitter-ab9b1",
      storageBucket: "kwitter-ab9b1.appspot.com",
      messagingSenderId: "595629750308",
      appId: "1:595629750308:web:5ce5ab5c8565fb1dca40b1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
name2=localStorage.getItem("username");
document.getElementById("user").innerHTML=name2;
function log(){
      window.location="index.html";
      localStorage.removeItem("username");
}
function add_room(){

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
