import firebase from  'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCxLc-6rTCDpbq9oHEsQIxm8gEH5CNCmfo",
  authDomain: "linkedin-clone-859b6.firebaseapp.com",
  projectId: "linkedin-clone-859b6",
  storageBucket: "linkedin-clone-859b6.appspot.com",
  messagingSenderId: "984094201633",
  appId: "1:984094201633:web:d71a3ba36a9b0244239060"
};
const firebaseApp = firebase.initializeApp(firebaseConfig); //connects database and sets things up
const  db = firebaseApp.firestore();
const auth =firebase.auth();
export {db,auth};
