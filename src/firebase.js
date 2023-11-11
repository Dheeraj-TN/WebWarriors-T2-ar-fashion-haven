// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfRJIkD6y7Kflb2KxJJdtVfPcfDnkSTro",
  authDomain: "ar-fashion-139f4.firebaseapp.com",
  projectId: "ar-fashion-139f4",
  storageBucket: "ar-fashion-139f4.appspot.com",
  messagingSenderId: "593147891775",
  appId: "1:593147891775:web:dcfcde2c2f152a1d59a88a",
  measurementId: "G-CCSPKHJBJV",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((res) => {
      const name = res.user.displayName;
      const email = res.user.email;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      return true;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
