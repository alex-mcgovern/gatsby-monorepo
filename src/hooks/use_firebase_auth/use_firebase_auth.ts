import { useEffect, useState } from "react";
import getFirebaseInstance from "../../utils/firebase/firebase";
import loadFirebaseDependencies from "../../utils/firebase/load_firebase_dependencies";

export const useFirebaseAuth = () => {
  const [user, setUser] = useState({});
  const [firebase, setFirebase] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("debug use firebase");
  useEffect(() => {
    let unsubscribe;
    let publicProfileUnsubscribe;

    loadFirebaseDependencies.then((app) => {
      const firebaseInstance = getFirebaseInstance(app);
      setFirebase(firebaseInstance);

      unsubscribe = firebaseInstance.auth.onAuthStateChanged((userResult) => {
        if (userResult) {
          publicProfileUnsubscribe = firebaseInstance.getUserProfile({
            userId: userResult.uid,
            handler: (response) => {
              firebaseInstance.auth.currentUser.getIdTokenResult(true).then(
                setUser({
                  ...userResult,
                  username: response.empty ? null : response.docs[0].id,
                })
              );
            },
          });
        } else {
          setUser(null);
        }

        setLoading(false);
      });
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }

      if (publicProfileUnsubscribe) {
        publicProfileUnsubscribe();
      }
    };
  }, []);

  return { user, firebase, loading };
};
