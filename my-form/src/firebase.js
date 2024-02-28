import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0Iok8v1v_-LGKDppvPTzgaqCjU2h4K1Y",
  authDomain: "form-a9b46.firebaseapp.com",
  projectId: "form-a9b46",
  storageBucket: "form-a9b46.appspot.com",
  messagingSenderId: "633919374033",
  appId: "1:633919374033:web:4a6a4ec84518158ba3fbf0",
  measurementId: "G-YQ85MJ8H0C"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;