<script type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDVTUp-0zmV-0vdywqt0iCbHCCnuEsVadM",
    authDomain: "ninjapay-24b2f.firebaseapp.com",
    projectId: "ninjapay-24b2f",
    storageBucket: "ninjapay-24b2f.appspot.com",
    messagingSenderId: "223863695725",
    appId: "1:223863695725:web:a8ab50d3d2e7a1769e1264",
    measurementId: "G-K0KY1HD87S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
</script>