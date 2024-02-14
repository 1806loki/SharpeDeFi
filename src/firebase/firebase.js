import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlKyNOYfjiYsBAR69trE8aOkSbqJho9z4",
  authDomain: "sharpe-ai-9f11e.firebaseapp.com",
  projectId: "sharpe-ai-9f11e",
  storageBucket: "sharpe-ai-9f11e.appspot.com",
  messagingSenderId: "958325687718",
  appId: "1:958325687718:web:d94565272e3f04c9dbbb67",
  measurementId: "G-SBHR6H7R5T",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
