// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-8QDYphOqCVT91REQ2AuVnVdpzgBT2w0",
  authDomain: "yhiv-fcb0d.firebaseapp.com",
  projectId: "yhiv-fcb0d",
  storageBucket: "yhiv-fcb0d.appspot.com",
  messagingSenderId: "766031380816",
  appId: "1:766031380816:web:cb7c1919b3f781b4c26c55"
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app