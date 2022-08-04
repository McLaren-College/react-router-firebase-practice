// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAB1xEszbbcHC5SUckDQinfaecZII68_Y4",
    authDomain: "contacts-app-3d40e.firebaseapp.com",
    projectId: "contacts-app-3d40e",
    storageBucket: "contacts-app-3d40e.appspot.com",
    messagingSenderId: "394253258752",
    appId: "1:394253258752:web:3576a6dec9bec0b69cc8e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }