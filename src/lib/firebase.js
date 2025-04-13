import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyHEA9A56RHjkCAEsT3B7SgqTbLtt5jj4",
  authDomain: "shopease-byg.firebaseapp.com",
  projectId: "shopease-byg",
  storageBucket: "shopease-byg.firebasestorage.app",
  messagingSenderId: "472195913260",
  appId: "1:472195913260:web:f6cd4ad64c4bc8930ba389",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
