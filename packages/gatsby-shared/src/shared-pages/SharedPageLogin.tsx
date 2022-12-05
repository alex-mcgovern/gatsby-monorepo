import React, { useCallback, useContext } from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  Button,
  Form,
  FormInput,
  InputErrorMessage,
} from "@alexmcgovern/boondoggle.design";
import {
  FirebaseContext,
  getFirebaseAuthErrorMessage,
} from "@alexmcgovern/firebase";
import { Link, navigate } from "gatsby";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

interface SharedPageLoginProps {
  location: {
    state?: {
      returnTo?: string;
    };
  };
}

interface FormDataShape {
  email: string;
  password: string;
}

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  mobile: "1x",
  tablet: "2x",
};

export function SharedPageLogin({ location }: SharedPageLoginProps) {
  /** ---------------------------------------------
   * Handle firebase auth
   * ----------------------------------------------- */

  const { firebaseAuth, user } = useContext(FirebaseContext) || {};

  /**
   * Note, we don't need 2nd & 3rd positional returns from this hook,
   * take care not to break this by omitting them.
   */
  const [signInWithEmailAndPassword, , , signInError] =
    useSignInWithEmailAndPassword(firebaseAuth);

  /** ---------------------------------------------
   * Handle form submission
   * ----------------------------------------------- */

  const logInOnFormSubmission = useCallback(
    async ({ email, password }: FormDataShape) => {
      return signInWithEmailAndPassword(email, password);
    },
    [signInWithEmailAndPassword]
  );

  /** ---------------------------------------------
   * Handle redirect to previous page on successful log in
   * ----------------------------------------------- */

  const handleRedirect = useCallback(() => {
    if (!signInError && user) {
      if (location?.state?.returnTo) {
        navigate(location.state.returnTo);
      }
    }
  }, [location?.state?.returnTo, signInError, user]);

  return (
    <Box marginY="spacing5">
      <Box display="grid" gridTemplateColumns={GRID_LAYOUT} gap="spacing3">
        <Box as="header">
          <Box as="h1" marginTop="none">
            Login
          </Box>

          <Box as="p">
            You need to be logged in to access or interact with some projects.
            Authentication is handled through Firebase.{" "}
            <a href="https://firebase.google.com/support/privacy">
              Firebase privacy policy.
            </a>
          </Box>
        </Box>
        <Box>
          {/** --------------------------------------------
           * Log in form
           * ----------------------------------------------- */}

          <Form
            callbackOnSuccessfulFormSubmission={handleRedirect}
            handleFormSubmission={logInOnFormSubmission}
            submitButtonText={user ? "Logged in" : "Log in"}
            disabled={!!user}
          >
            <FormInput
              errorMessage="Please ensure you have entered a valid email address."
              required
              name="email"
              label="Email address"
              id="email"
              placeholder="john@doe.com"
              type="email"
              autoComplete="email"
              disabled={!!user}
            />

            <FormInput
              errorMessage="Please ensure you have entered a valid password."
              id="description"
              label="Password"
              name="password"
              placeholder="Must be alphanumeric, with > 6 characters"
              type="password"
              autoComplete="current-password"
              disabled={!!user}
            />
          </Form>

          {/** --------------------------------------------
           * Render auth errors
           * ----------------------------------------------- */}

          {signInError && (
            <InputErrorMessage
              message={getFirebaseAuthErrorMessage(signInError.code)}
            />
          )}

          {/** --------------------------------------------
           * Allow non-logged in users to register an account
           * ----------------------------------------------- */}

          {!user && (
            <Button
              name="register"
              size="sm"
              appearance="uiLink"
              to="/register"
              as={Link}
              state={location?.state}
            >
              Register an account
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
