// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN6xy5t4z9r24zNBXTXuGPjjpP-7syD2w",
  authDomain: "temporal-e5b36.firebaseapp.com",
  projectId: "temporal-e5b36",
  storageBucket: "temporal-e5b36.appspot.com",
  messagingSenderId: "410490315273",
  appId: "1:410490315273:web:2e271196898d9bc091ced8",
  measurementId: "G-GD1KTHCZWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
getToken(messaging, { vapidKey: "BDHijPmyKGW11NERA68wzToxc-tcveY4RNl0nb8hKLrQw4IOoqDsz4BVyMDA9ONUMJ0gu1_ICl8Af0MliEIex_I" })