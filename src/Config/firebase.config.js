import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAVbxX_ZeL8cBprJPomCY-66x3GL4RiZ8",
  authDomain: "assignment-8e052.firebaseapp.com",
  projectId: "assignment-8e052",
  storageBucket: "assignment-8e052.appspot.com",
  messagingSenderId: "866623366877",
  appId: "1:866623366877:web:e3ffd72da7f8498cea9d34",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
