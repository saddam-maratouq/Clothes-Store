import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDtNg4i0SdA7vf4bVYsVmzheCFUb0mFoTU",
  authDomain: "clothes-store-dd00f.firebaseapp.com",
  projectId: "clothes-store-dd00f",
  storageBucket: "clothes-store-dd00f.appspot.com",
  messagingSenderId: "710455417251",
  appId: "1:710455417251:web:74f8160b6166c6d4a52216",
  measurementId: "G-TK30R1YPXR",
};

firebase.initializeApp(config);
export const auth = firebase.auth();

export const creatuserprofileDocument = async (userAuth,additionalData) => {
  if (!userAuth) return; /// not null if login

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get(); /// use snap shot to acces exists prop which important to make data not requiered ///

  console.log(snapshot);
  // console.log(userRef);

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user ", error.messge);
    }
  }
  return userRef;
};

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
