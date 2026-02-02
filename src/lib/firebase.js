import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// You can get this from the Firebase Console > Project Settings
const firebaseConfig = {
    apiKey: "AIzaSyD0Bu-EMUo9f5Cvb2-SXXHbOhN7PbFm_yw",
    authDomain: "belajar-mengaji-edcb1.firebaseapp.com",
    projectId: "belajar-mengaji-edcb1",
    storageBucket: "belajar-mengaji-edcb1.firebasestorage.app",
    messagingSenderId: "651221768653",
    appId: "1:651221768653:web:69a234649506dfdce14c84",
    measurementId: "G-8ZC580DXPN"
};

// Initialize Firebase only if keys are provided (basic check)
let db = null;
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    try {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
    } catch (error) {
        console.error("Firebase initialization failed:", error);
    }
} else {
    console.warn("Firebase config missing. Using LocalStorage mode.");
}

export { db };
