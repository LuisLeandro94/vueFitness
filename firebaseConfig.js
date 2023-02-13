// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqqOEX_QuVOKuVMKh0AJTRePCH6SP5Kd0",
  authDomain: "vuefitness.firebaseapp.com",
  projectId: "vuefitness",
  storageBucket: "vuefitness.appspot.com",
  messagingSenderId: "245269999129",
  appId: "1:245269999129:web:11a63b56d1dfcddaef8488",
  measurementId: "G-2BH0J44Y2R"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth();

export { db, auth, storage };
