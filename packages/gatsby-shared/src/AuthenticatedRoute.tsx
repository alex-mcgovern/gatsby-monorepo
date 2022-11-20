import React, { useContext } from "react";
import { Box, Button, Loader } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";

export function AuthenticatedRoute({
  component: Component,
  location,
  ...rest
}) {
  const { user, firebaseAuthLoading } = useContext(FirebaseContext);
  const isLoggedIn = !!user;

  if (isLoggedIn) {
    return <Component {...rest} />;
  }

  if (firebaseAuthLoading) {
    return <Loader size="3x" width="100%" minHeight="75vh" />;
  }

  return (
    <Box as="header">
      <Box as="h1">You need to be signed in</Box>

      <Box as="p">
        <b>Note:</b> You must have an account in order to use the demo.
      </Box>

      <Box display="flex" gap="spacing1">
        <Button
          appearance="secondary"
          title={isLoggedIn ? "Go to demo" : "Log in"}
          to={isLoggedIn ? "/projects/firebase-kanban/demo" : "/login"}
        />
        <Button appearance="primary" title="Read blog post" to="/blog" />
      </Box>
    </Box>
  );
}
