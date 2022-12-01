import React, { useCallback, useContext, useState } from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  Button,
  Card,
  Form,
  FormInput,
  InputErrorMessage, // eslint-disable-next-line import/no-duplicates
} from "@alexmcgovern/boondoggle.design";
import {
  FirebaseContext,
  getFirebaseAuthErrorMessage,
} from "@alexmcgovern/firebase";
import { CountdownWithCallback } from "@alexmcgovern/gatsby-shared";
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

export default function SharedPageLogin({ location }: SharedPageLoginProps) {
  /** ---------------------------------------------
   * Handle redirect to previous page on successful log in
   * ----------------------------------------------- */

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const initiateRedirect = useCallback(() => {
    setShouldRedirect(true);
  }, []);

  const handleRedirect = useCallback(() => {
    if (location?.state?.returnTo) {
      navigate(location.state.returnTo);
    }
  }, [location.state?.returnTo]);

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

  return (
    <Box marginY="spacing5">
      <Card marginX="auto" maxWidth="gridSpan6" boxShadow="lg">
        <Box as="h3">Sign in</Box>

        <Box marginBottom="spacing2">
          Give use your deats, and we'll give you the deals.
        </Box>

        {/** --------------------------------------------
         * Log in form
         * ----------------------------------------------- */}

        <Form
          callbackOnSuccessfulFormSubmission={initiateRedirect}
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
         * Handle redirect to previous page, and communicate state to user
         * ----------------------------------------------- */}

        {user && location?.state?.returnTo && shouldRedirect && (
          <Box marginTop="spacing1">
            Redirecting in{" "}
            <CountdownWithCallback callback={handleRedirect} seconds={3} />.{" "}
            <Link to={location.state.returnTo}>Go now</Link>
          </Box>
        )}

        {/** --------------------------------------------
         * Allow non-logged in users to register an account
         * ----------------------------------------------- */}

        {!user && (
          <Button size="sm" appearance="uiLink" to="/register" as={Link}>
            Register an account
          </Button>
        )}
      </Card>
    </Box>
  );
}
