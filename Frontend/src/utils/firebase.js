import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myraai-1b2c2.firebaseapp.com",
  projectId: "myraai-1b2c2",
  storageBucket: "myraai-1b2c2.firebasestorage.app",
  messagingSenderId: "221773604643",
  appId: "1:221773604643:web:3cacec3ebfae934fa4ce96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}