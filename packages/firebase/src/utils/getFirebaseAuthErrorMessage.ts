import { FIREBASE_AUTH_ERRORS } from "../constants/FIREBASE_AUTH_ERRORS";

export function getFirebaseAuthErrorMessage(errorCode?: string) {
  return (
    (errorCode && FIREBASE_AUTH_ERRORS[errorCode]) || "Something went wrong"
  );
}
