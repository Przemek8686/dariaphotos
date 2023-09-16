import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ_8spVzlESY6uzj5z03rOfWeJAhltM8k",
  authDomain: "dariaphotos-e656d.firebaseapp.com",
  projectId: "dariaphotos-e656d",
  storageBucket: "dariaphotos-e656d.appspot.com",
  messagingSenderId: "662644129673",
  appId: "1:662644129673:web:3934418206cf76ce1aab58"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;