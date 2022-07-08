import React from "react";
import { initializeApp } from "firebase/app";
import { Auth, User, getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

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

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

interface IFirebaseProviderProps {
  children: React.ReactNode;
}

interface IFirebaseAuthContext {
  user?: User | null;
  firebaseAuthError?: any;
  firebaseApp?: any;
  firebaseAuthLoading?: boolean;
  firebaseAuth: Auth;
}

export const FirebaseAuthContext = React.createContext<IFirebaseAuthContext>({
  user: undefined,
  firebaseAuth: firebaseAuth,
});

export const FirebaseProvider = ({ children }: IFirebaseProviderProps) => {
  const [user, firebaseAuthLoading, firebaseAuthError] =
    useAuthState(firebaseAuth);

  console.log("debug context", {
    user,
    firebaseApp,
    firebaseAuthLoading,
    firebaseAuthError,
    firebaseAuth,
  });

  return (
    <FirebaseAuthContext.Provider
      value={{
        user,
        firebaseApp,
        firebaseAuthLoading,
        firebaseAuthError,
        firebaseAuth,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};
