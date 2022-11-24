import type { ElementType } from "react";
import React, { useContext, useMemo } from "react";
import { Box, Button, Loader } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { Link } from "gatsby";

interface AuthenticatedRouteProps {
  component: ElementType;
  returnTo: string;
}

export function AuthenticatedRoute({
  component: Component,
  returnTo,
  ...rest
}: AuthenticatedRouteProps) {
  const { user, firebaseAuthLoading } = useContext(FirebaseContext) || {};
  const isLoggedIn = !!user;

  const linkState = useMemo(() => {
    return { returnTo };
  }, [returnTo]);

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
        <b>Note:</b> You must have an account in order to access this resource.
      </Box>

      <Button as={Link} to="/login" state={linkState}>
        Log in
      </Button>
    </Box>
  );
}
