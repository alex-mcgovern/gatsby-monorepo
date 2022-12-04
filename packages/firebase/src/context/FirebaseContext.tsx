import type { ReactNode } from "react";
import React, { createContext, useMemo } from "react";
import type { FirebaseApp, FirebaseOptions } from "firebase/app";
import { initializeApp } from "firebase/app";
import type { Auth, User } from "firebase/auth";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";
import {
  connectFirestoreEmulator,
  initializeFirestore,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const USE_EMULATOR =
  process.env.GATSBY_USE_FIREBASE_EMULATOR === "true" || false;

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.GATSBY_FIREBASE_WEB_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: USE_EMULATOR,
});

/**
 * Optionally use emulator for testing/development
 */
if (USE_EMULATOR) {
  connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
  connectAuthEmulator(firebaseAuth, "http://127.0.0.1:9099");
}

/** -----------------------------------------------------------------------------
 * Main Firebase context provider
 * ------------------------------------------------------------------------------- */

interface FirebaseAuthProviderProps {
  children: ReactNode | Array<ReactNode>;
}

interface FirebaseContextProvided {
  user?: User | null;
  firebaseAuthError?: Error;
  firebaseApp: FirebaseApp;
  firebaseAuthLoading?: boolean;
  firebaseAuth: Auth;
  firestore?: Firestore;
}

export const FirebaseContext = createContext<FirebaseContextProvided>({
  firebaseAuth,
  firestore,
  firebaseApp: {
    name: "undefined",
    options: {},
    automaticDataCollectionEnabled: false,
  },
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
