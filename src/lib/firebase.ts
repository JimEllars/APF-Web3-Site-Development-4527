import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase - wrap in try/catch to not crash if dummy keys are used or blocked by adblockers in dev
let db: Firestore;
let isMocked = false;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (e) {
  console.error("Firebase initialization failed. Using mock instance for development.", e);
  db = {
    type: 'firestore',
    get app() {
      return {
        name: '[DEFAULT]',
        options: firebaseConfig,
        automaticDataCollectionEnabled: false
      };
    },
    toJSON: () => ({})
  };
  isMocked = true;
}

export const isFirebaseConfigured = !isMocked && Boolean(firebaseConfig.projectId);

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
