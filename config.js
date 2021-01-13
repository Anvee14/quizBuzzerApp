import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCvK_LpDrv7KJyoUfHUoF315Agh3tXfkd4",
    authDomain: "buzzerproject-de660.firebaseapp.com",
    databaseURL: "https://buzzerproject-de660.firebaseio.com",
    projectId: "buzzerproject-de660",
    storageBucket: "buzzerproject-de660.appspot.com",
    messagingSenderId: "655764824057",
    appId: "1:655764824057:web:75275b54b98d93ff792728",
    measurementId: "G-0CX05JWKRD"
  };
  // Initialize Firebase
  if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
  export default firebase.database() 