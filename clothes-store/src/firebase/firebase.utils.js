import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth' 


 const config =  {
    apiKey: "AIzaSyDtNg4i0SdA7vf4bVYsVmzheCFUb0mFoTU",
    authDomain: "clothes-store-dd00f.firebaseapp.com",
    projectId: "clothes-store-dd00f",
    storageBucket: "clothes-store-dd00f.appspot.com",
    messagingSenderId: "710455417251",
    appId: "1:710455417251:web:74f8160b6166c6d4a52216",
    measurementId: "G-TK30R1YPXR"
  };

  firebase.initializeApp(config); 

  export const auth = firebase.auth(); 

  export const firestore = firebase.firestore(); 

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;
