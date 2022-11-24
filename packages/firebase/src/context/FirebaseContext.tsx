import type { ReactNode } from "react";
import React, { createContext, useMemo } from "react";
import type { FirebaseApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import type { Auth, User } from "firebase/auth";
import { getAuth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

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
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

interface FirebaseAuthProviderProps {
  children: ReactNode | Array<ReactNode>;
}

interface FirebaseContextProvided {
  user?: User | null;
  firebaseAuthError?: Error;
  firebaseApp?: FirebaseApp;
  firebaseAuthLoading?: boolean;
  firebaseAuth: Auth;
  firestore?: Firestore;
}

export const FirebaseContext = createContext<FirebaseContextProvided>({
  firebaseAuth,
  firestore,
});

export function FirebaseProvider({ children }: FirebaseAuthProviderProps) {
  const [user, firebaseAuthLoading, firebaseAuthError] =
    useAuthState(firebaseAuth) || [];

  const value = useMemo(() => {
    return {
      user,
      firebaseApp,
      firebaseAuthLoading,
      firebaseAuthError,
      firebaseAuth,
      firestore,
    };
  }, [firebaseAuthError, firebaseAuthLoading, user]);

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
