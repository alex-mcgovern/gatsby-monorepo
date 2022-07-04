const app = import("firebase/compat/app");
const auth = import("firebase/compat/auth");
const database = import("firebase/compat/firestore");
const functions = import("firebase/compat/functions");

const loadFirebaseDependencies = Promise.all([
  app,
  auth,
  database,
  functions,
]).then((values) => {
  return values[0].default;
});

export default loadFirebaseDependencies;
