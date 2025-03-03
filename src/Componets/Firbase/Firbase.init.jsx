// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnEFn9ul1eIrm1LIbRjpwLDU8gq8CQXX8",
  authDomain: "new-doctor-portal-3476b.firebaseapp.com",
  projectId: "new-doctor-portal-3476b",
  storageBucket: "new-doctor-portal-3476b.firebasestorage.app",
  messagingSenderId: "604592287269",
  appId: "1:604592287269:web:b869efce78b8959e4459cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app