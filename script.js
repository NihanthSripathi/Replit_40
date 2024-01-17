
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlHJSqNHyPtkrEpGcALIYKvBXIuCMYS9E",
  authDomain: "replit40.firebaseapp.com",
  projectId: "replit40",
  storageBucket: "replit40.appspot.com",
  messagingSenderId: "425549666219",
  appId: "1:425549666219:web:5c651d20453169db6be4ee",
  measurementId: "G-5PT5M9VYW1",
  databaseURL:"https://replit40-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// Reference to the database
const database = getDatabase(firebaseApp);

// Function to export name and username to Firebase
function exportToFirebase(name,branch) {
  // Push data to the 'users' node in the database
  const usersRef = ref(database, 'users');
  push(usersRef, {
      name: name,
      branch: branch
  }).then(() => {
      console.log('Data exported successfully');
  }).catch((error) => {
      console.log('Error exporting data:', error);
  });
}


class FreeCo {
  fill(name, branch) {
    this.NAME = name
    this.BRANCH = branch
  }
  conform() {
    
  // Call the function with the data to export
    exportToFirebase(this.NAME, this.BRANCH);
    console.log(this.NAME + " your form is submitted")
  }
  cancel() {
    console.log(this.NAME + " your form is canceled")
  }
}
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();

  let name1 = document.getElementById("name").value
  let branch1 = document.getElementById("branch").value


  let detail = new FreeCo()
  detail.fill(name1, branch1)

  let cnf = confirm(" would you like to conform")
  if (cnf == true) {
    detail.conform()
  }
  else {
    detail.cancel()
  }
  document.getElementById("form").reset()
})

