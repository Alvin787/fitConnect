import firebase from "firebase/app";
import "firebase/auth";

/* const firebaseConfig = {
  apiKey: "AIzaSyA37_NKu5szbxIzOPGCBaxlvFv9PQH_5Ew",
  authDomain: "htn-fitconnect.firebaseapp.com",
  projectId: "htn-fitconnect",
  storageBucket: "htn-fitconnect.appspot.com",
  messagingSenderId: "301271393586",
  appId: "1:301271393586:web:8f3c5ce169eac86714632b"
}.auth();

const initFirebase = firebase.initializeApp(firebaseConfig)
const db = initFirebase.firestore();

export default db; */

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyA37_NKu5szbxIzOPGCBaxlvFv9PQH_5Ew",
    authDomain: "htn-fitconnect.firebaseapp.com",
    projectId: "htn-fitconnect",
    storageBucket: "htn-fitconnect.appspot.com",
    messagingSenderId: "301271393586",
    appId: "1:301271393586:web:8f3c5ce169eac86714632b"
  }).auth();

 