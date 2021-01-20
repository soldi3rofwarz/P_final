import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwUF8KjiHwOOWhO3cgfjgFRo4AdCy3sTE",
    authDomain: "pfinal-f8f04.firebaseapp.com",
    databaseURL: "https://pfinal-f8f04.firebaseio.com",
    projectId: "pfinal-f8f04",
    storageBucket: "pfinal-f8f04.appspot.com",
    messagingSenderId: "776813952989",
    appId: "1:776813952989:web:65d6aa20395ece96a74034",
    measurementId: "G-00ER5EGP69"
};

    // Initialize Firebase
    if(firebase.apps.length <= 0) {
        firebase.initializeApp(firebaseConfig);
    }
    export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    export const storage = firebase.storage();
    export const db = firebase.firestore();
    export const auth = firebase.auth();
    export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    


export default firebase;
