import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  getFirestore,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    if (!firebaseInstance) {
      this.auth = getAuth(app);
      this.db = getFirestore(app);
      this.functions = getFunctions(app);
      this.storage = getStorage(app);
    }
  }

  getUserProfile({ userId, handler }) {
    onSnapshot(
      query(
        collection(this.db, "publicProfiles"),
        where("userId", "==", userId),
        limit(1)
      ),
      (docs) => handler(docs)
    );
  }

  async register({ email, password, username }) {
    await createUserWithEmailAndPassword(this.auth, email, password);
    const createProfileCallable = httpsCallable(
      this.functions,
      "createPublicProfile"
    );
    return createProfileCallable({
      username,
    });
  }

  async login({ email, password }) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    await signOut(this.auth);
  }
}

let firebaseInstance;

function getFirebaseInstance() {
  if (!firebaseInstance) {
    firebaseInstance = new Firebase();
    return firebaseInstance;
  } else if (firebaseInstance) {
    return firebaseInstance;
  } else {
    return null;
  }
}

export default getFirebaseInstance;
