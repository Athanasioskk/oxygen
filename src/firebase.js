import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrDvgqhAOAR6BeHyZocL9vMidfEYH2yes",
  authDomain: "oxygen-gym-11db7.firebaseapp.com",
  projectId: "oxygen-gym-11db7",
  storageBucket: "oxygen-gym-11db7.appspot.com",
  messagingSenderId: "763154138510",
  appId: "1:763154138510:web:a56b9842650c4b662390df",
  measurementId: "G-6TRKTB38JH",
  storageBucket: '',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export { auth, db, storage, app };
