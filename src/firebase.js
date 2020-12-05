import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// })
const app = firebase.initializeApp({
    apiKey: "AIzaSyC8G8OVgQowYhEJPjU_Mw1xX2OVm2O2gA0",
    authDomain: "sartsug-bhutan.firebaseapp.com",
    databaseURL: "https://sartsug-bhutan.firebaseio.com",
    projectId: "sartsug-bhutan",
    storageBucket: "sartsug-bhutan.appspot.com",
    messagingSenderId: "1047071621930",
    appId: "1:1047071621930:web:93f09ffaf2d5293ac31453",
    measurementId: "G-V4Q78MFSL6"
  });
export const storage = firebase.storage();
export const auth = app.auth();
export const db = firebase.firestore();
export default app