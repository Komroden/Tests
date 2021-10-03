import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';



const firebaseConfig = {
    apiKey: "AIzaSyA0cwTx2KazQA9Mo9FCFA747vESYu9FTIY",
    authDomain: "test-f4df2.firebaseapp.com",
    projectId: "test-f4df2",
    storageBucket: "test-f4df2.appspot.com",
    messagingSenderId: "167506417257",
    appId: "1:167506417257:web:6378dc72e9c9a5d75334f8"
};

firebase.initializeApp(firebaseConfig);
export const auth= firebase.auth();
export const db = firebase.database();