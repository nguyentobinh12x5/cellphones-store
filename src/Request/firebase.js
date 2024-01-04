// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs0lOmKqV_FDvONLnf0Q37BhKrmdBfPvI",
  authDomain: "cellphonestore-932d5.firebaseapp.com",
  projectId: "cellphonestore-932d5",
  storageBucket: "cellphonestore-932d5.appspot.com",
  messagingSenderId: "422106730052",
  appId: "1:422106730052:web:bd61c856a85dba3777b611",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initiallize Firebase Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default app;
