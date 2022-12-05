import React, { useCallback, useContext } from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  Form,
  FormInput,
  InputErrorMessage,
} from "@alexmcgovern/boondoggle.design";
import {
  FirebaseContext,
  getFirebaseAuthErrorMessage,
} from "@alexmcgovern/firebase";
import { navigate } from "gatsby";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

interface SharedPageRegisterProps {
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

export function SharedPageRegister({ location }: SharedPageRegisterProps) {
  /** ---------------------------------------------
   * Handle redirect to previous page on successful log in
   * ----------------------------------------------- */

  const handleRedirect = useCallback(() => {
    if (location?.state) {
      navigate("/update-profile/", {
        state: location.state,
      });
    }
    navigate("/update-profile/");
  }, [location?.state]);

  /** ---------------------------------------------
   * Handle firebase auth
   * ----------------------------------------------- */

  const { firebaseAuth, user } = useContext(FirebaseContext) || {};

  /**
   * Note, we don't need 2nd & 3rd positional returns from this hook,
   * take care not to break this by omitting them.
   */

  const [createUserWithEmailAndPassword, , , registrationError] =
    useCreateUserWithEmailAndPassword(firebaseAuth);

  /** ---------------------------------------------
   * Handle form submission
   * ----------------------------------------------- */

  const registerOnFormSubmission = useCallback(
    async ({ email, password }: FormDataShape) => {
      return createUserWithEmailAndPassword(email, password);
    },
    [createUserWithEmailAndPassword]
  );

  return (
    <Box marginY="spacing5">
      <Box display="grid" gridTemplateColumns={GRID_LAYOUT} gap="spacing3">
        <Box as="header">
          <Box as="h1" marginTop="none">
            Register
          </Box>

          <Box as="p">
            I'll just need a few details to create an account. Authentication is
            handled through Firebase.{" "}
            <a href="https://firebase.google.com/support/privacy">
              Firebase privacy policy.
            </a>
            .
          </Box>
        </Box>
        <Box>
          {/** --------------------------------------------
           * Registration form
           * ----------------------------------------------- */}

          <Form
            callbackOnSuccessfulFormSubmission={handleRedirect}
            handleFormSubmission={registerOnFormSubmission}
            submitButtonText={user ? "Registered" : "Register"}
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

          {registrationError && (
            <InputErrorMessage
              message={getFirebaseAuthErrorMessage(registrationError.code)}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
