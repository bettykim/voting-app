import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPgt0p_B6u9aFJV4LOaIAiDT_Ax6yJoNo",
  authDomain: "react-authentication-8ddbe.firebaseapp.com",
  projectId: "react-authentication-8ddbe",
  storageBucket: "react-authentication-8ddbe.appspot.com",
  messagingSenderId: "1034554677923",
  appId: "1:1034554677923:web:05c0439a5dfe564838fd16",
  measurementId: "G-NTYBHX5B9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
