import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChntDi3fiwfISbguu6cpmPQrzBp1G9fAQ",
  authDomain: "genie-76492.firebaseapp.com",
  projectId: "genie-76492",
  storageBucket: "genie-76492.firebasestorage.app",
  messagingSenderId: "420834808488",
  appId: "1:420834808488:web:9fe3ef1528af24b655689d",
  measurementId: "G-Y9E5VZ71WZ"
};

const app = initializeApp(firebaseConfig);

// Initialize analytics only if supported
let analytics;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.log('Analytics not supported in this environment');
}

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
