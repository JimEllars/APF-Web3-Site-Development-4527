import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // Add actual config here when available
  apiKey: "AIzaSyDummyKeyForScaffoldingPurposesOnly",
  authDomain: "apf-staging.firebaseapp.com",
  projectId: "apf-staging",
  storageBucket: "apf-staging.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:1234567890abcdef123456"
};

// Initialize Firebase - wrap in try/catch to not crash if dummy keys are used or blocked by adblockers in dev
let db: Firestore;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (e) {
  console.error("Firebase initialization failed. Using mock instance for development.", e);
  db = {} as Firestore; // Mock db
}

export { db };

// Data Architecture References (as per APF Backend Context)
export const paths = {
  public: {
    news: collection(db, 'artifacts', 'apf', 'public', 'data', 'news'),
    policies: collection(db, 'artifacts', 'apf', 'public', 'data', 'policies'),
    ledger: collection(db, 'artifacts', 'apf', 'public', 'data', 'ledger'),
    events: collection(db, 'artifacts', 'apf', 'public', 'data', 'events'),
  },
  user: (userId: string) => ({
    profile: doc(db, 'artifacts', 'apf', 'users', userId, 'profile', 'data'),
    vault: doc(db, 'artifacts', 'apf', 'users', userId, 'vault', 'data'),
    votes: collection(db, 'artifacts', 'apf', 'users', userId, 'votes'),
  })
};
