import firebase from 'firebase';
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyADbDNT5ZfuFxTZHt_OFKiYxcHX7jXGg5M",
    authDomain: "book-store-7a388.firebaseapp.com",
    databaseURL: "https://book-store-7a388.firebaseio.com",
    projectId: "book-store-7a388",
    storageBucket: "book-store-7a388.appspot.com",
    messagingSenderId: "621374634959"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;