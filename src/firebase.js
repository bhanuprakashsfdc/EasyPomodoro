import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYKENajSGidt5m9NrUgU2r4KiZwthFE1I",
    authDomain: "easypomodoro.firebaseapp.com",
    projectId: "easypomodoro",
    storageBucket: "easypomodoro.appspot.com",
    messagingSenderId: "924978582253",
    appId: "1:924978582253:web:d5348ece38941e25b0f2e4",
    measurementId: "G-4ZZFNSJGX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
