// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqioz_hvj4o3p5L4WPY0VruSCDE8LsZDQ",
  authDomain: "vennelas-firestore.firebaseapp.com",
  projectId: "vennelas-firestore",
  storageBucket: "vennelas-firestore.appspot.com",
  messagingSenderId: "57680240984",
  appId: "1:57680240984:web:0c30a997d4fc0688cac52d",
  measurementId: "G-VJG5D6SBHX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
