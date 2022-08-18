// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg_ttv1yosQc6fHcwsOtUsVlC5E0yCHhU",
  authDomain: "dunder-milfflin.firebaseapp.com",
  projectId: "dunder-milfflin",
  storageBucket: "dunder-milfflin.appspot.com",
  messagingSenderId: "206133008729",
  appId: "1:206133008729:web:d3d558e72604fbc73f1448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;