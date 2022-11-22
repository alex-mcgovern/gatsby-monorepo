import { initializeApp } from "firebase/app";
import {
  Timestamp,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { COMMENTS_MOCK_DATA_SET } from "../../__mocks__/COMMENTS_MOCK_DATASET";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_WEB_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

COMMENTS_MOCK_DATA_SET.forEach(
  async ({ displayName, email, rating, description, author_uid, created }) => {
    return addDoc(
      collection(getFirestore(firebaseApp), "feedback", "data", "comments"),
      {
        displayName,
        email,
        rating,
        description,
        author_uid,
        created: Timestamp.fromMillis(created),
      }
    ).catch((error) => {
      console.error(error);
    });
  }
);
