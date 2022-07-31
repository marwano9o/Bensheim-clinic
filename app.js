 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
 import { getDatabase, set, ref ,push, child, onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDG9_dwhyX9qpgzBSf5_8MN4bq3-2jcUoI",
authDomain: "crud-1dd2f.firebaseapp.com",
databaseURL: "https://crud-1dd2f-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "crud-1dd2f",
storageBucket: "crud-1dd2f.appspot.com",
messagingSenderId: "1050878141115",
appId: "1:1050878141115:web:cfb3b196a6a7199ba43f9e"
 };

 // Initialize Firebase

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = getDatabase(app);

  // write data
  submit.addEventListener('click',(e) => {
    var firstName = document.getElementById('first-name').value;  
    var lastName = document.getElementById('last-name').value;  
    var email = document.getElementById('email').value;  
    var tel= document.getElementById('tel').value;  
    var time = document.getElementById('time').value;  

    const userId = push(child(ref(database), 'users')).key;
   
    set(ref(database, 'users/' + userId), {
    firstName: firstName,
    lastName: lastName,
    email : email,
    tel : tel,
    time : time
   });
   alert('saved');
  });

  