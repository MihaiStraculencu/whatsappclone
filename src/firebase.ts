// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4qBNd4vyGOUuF1SMumMNtMlnDQfGPyTM",
  authDomain: "whatsappclone-e34e4.firebaseapp.com",
  projectId: "whatsappclone-e34e4",
  storageBucket: "whatsappclone-e34e4.appspot.com",
  messagingSenderId: "869063002942",
  appId: "1:869063002942:web:b69556950514ca4e6cfa6f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
