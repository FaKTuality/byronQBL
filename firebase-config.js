// ============================================================
// REPLACE THIS with the config object from your Firebase project.
//
// How to get it:
// 1. Go to https://console.firebase.google.com
// 2. Create a project (or open an existing one)
// 3. Click the "</>" (web app) icon to register a web app
// 4. Firebase will show you a config object like the one below —
//    copy/paste it here, replacing everything inside firebaseConfig.
// 5. In the Firebase console, go to Build > Firestore Database
//    and click "Create database" (start in test mode is fine
//    while you're building — see README.md for production rules).
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCSS14XYZ8lOaf1do24v42oOa2HQPwIBmI",
  authDomain: "byronqbl.firebaseapp.com",
  projectId: "byronqbl",
  storageBucket: "byronqbl.firebasestorage.app",
  messagingSenderId: "1013611254452",
  appId: "1:1013611254452:web:0fbf9272029704f71f7de1"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();





