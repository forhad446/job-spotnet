import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAO5tuPJO7uz-EqRTMY9mvo-3GE5BfhTeg",
    authDomain: "job-spotnet.firebaseapp.com",
    projectId: "job-spotnet",
    storageBucket: "job-spotnet.appspot.com",
    messagingSenderId: "769077899081",
    appId: "1:769077899081:web:e244985b0dc83ab392b498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;