import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA45FHqZWYCoU18Lu07Wo1zsttfVcD4A5w",
  authDomain: "crwn-db-dad39.firebaseapp.com",
  projectId: "crwn-db-dad39",
  storageBucket: "crwn-db-dad39.appspot.com",
  messagingSenderId: "666412089662",
  appId: "1:666412089662:web:201c21f9d65e83c0236c6f",
  measurementId: "G-EDWFE3ZEWW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
