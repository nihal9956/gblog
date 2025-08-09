import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: getEvn('VITE_FIREBASE_API'),
    authDomain: "gblog-6c35a.firebaseapp.com",
  projectId: "gblog-6c35a",
  storageBucket: "gblog-6c35a.firebasestorage.app",
  messagingSenderId: "499724386108",
  appId: "1:499724386108:web:2a261dfa00a9af055a6839",
  measurementId: "G-L3CF9NJ57K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }