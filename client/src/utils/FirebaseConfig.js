import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDs2r4IhdN53OWeJOImag2Rmb01mkJPMDs",
  authDomain: "whatsapp-clone-148c6.firebaseapp.com",
  projectId: "whatsapp-clone-148c6",
  storageBucket: "whatsapp-clone-148c6.appspot.com",
  messagingSenderId: "496658126420",
  appId: "1:496658126420:web:24294591dc4edd316effc1",
  measurementId: "G-XSMXKL2BPL",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
