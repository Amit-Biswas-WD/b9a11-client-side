import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-wX8uWWVcjfwXEXbwffglxjW0xcxmK9Y",
  authDomain: "assignment-10-98da9.firebaseapp.com",
  projectId: "assignment-10-98da9",
  storageBucket: "assignment-10-98da9.appspot.com",
  messagingSenderId: "302753115635",
  appId: "1:302753115635:web:fd2ed658f9b7070e78f686",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
