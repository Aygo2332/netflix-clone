import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvGBq6GU-L-NPBYYPcuxnOqkXmAz_G2F4",
    authDomain: "netflix-1c0b9.firebaseapp.com",
    projectId: "netflix-1c0b9",
    storageBucket: "netflix-1c0b9.appspot.com",
    messagingSenderId: "1065306384966",
    appId: "1:1065306384966:web:e1eda9e265106b94c13847",
    measurementId: "G-3PN6XZN4T4"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);