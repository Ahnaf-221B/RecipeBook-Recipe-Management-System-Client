// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDxRSgciZImNQRUCkWyqAeAAzPvu8-imyk",
	authDomain: "recipebook-65258.firebaseapp.com",
	projectId: "recipebook-65258",
	storageBucket: "recipebook-65258.firebasestorage.app",
	messagingSenderId: "456388574146",
	appId: "1:456388574146:web:b91f2f8a4969ee22d1745b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
