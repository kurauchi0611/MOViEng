import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBHSQpqpFZqcZ2nHocjyqWb5CqKSlRiG2U",
  authDomain: "movieng-5ec01.firebaseapp.com",
  projectId: "movieng-5ec01",
  storageBucket: "movieng-5ec01.appspot.com",
  messagingSenderId: "108004115926",
  appId: "1:108004115926:web:e3879852bb5ee14b9e9077",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export default firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
