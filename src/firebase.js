// Import the functions you need from the SDKs you need
import * as fb from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyDcKt3Cdrs7iC1RIxiUefKdLbrCSeWVnTw",
	authDomain: "sod-portal.firebaseapp.com",
	projectId: "sod-portal",
	storageBucket: "sod-portal.appspot.com",
	messagingSenderId: "59125054249",
	appId: "1:59125054249:web:2b070bb11aee747dead538",
	measurementId: "G-EHYEMVT11Z",
};

// Initialize Firebase
export const app = fb.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
