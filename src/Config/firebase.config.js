import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC1hgmqe_FknilPv5KgTwr-ROa-3AUYV8",
  authDomain: "assignment-11-2b4f2.firebaseapp.com",
  projectId: "assignment-11-2b4f2",
  storageBucket: "assignment-11-2b4f2.appspot.com",
  messagingSenderId: "453526427765",
  appId: "1:453526427765:web:db4c71b859b091d03e403c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
