import React, { useCallback, useContext } from "react";
import type { GetSprinklesArgs } from "@alexmcgovern/boondoggle.design";
import {
  Box,
  Form,
  FormInput,
  InputErrorMessage,
} from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { navigate } from "gatsby";
import { useUpdateProfile } from "react-firebase-hooks/auth";

interface SharedPageLoginProps {
  location: {
    state?: {
      returnTo?: string;
    };
  };
}

interface FormDataShape {
  displayName: string;
}

const GRID_LAYOUT: GetSprinklesArgs["gridTemplateColumns"] = {
  mobile: "1x",
  tablet: "2x",
};

export function SharedPageUpdateProfile({ location }: SharedPageLoginProps) {
  /** ---------------------------------------------
   * Handle redirect to previous page on successful log in
   * ----------------------------------------------- */
  /** ToDo(update-profile): Debug why `navigate` not passing state from previous page */

  const handleRedirect = useCallback(() => {
    if (location?.state?.returnTo) {
      navigate("/");
    }
    navigate("/");
  }, [location.state?.returnTo]);

  /** ---------------------------------------------
   * Handle firebase auth
   * ----------------------------------------------- */

  const { firebaseAuth, user } = useContext(FirebaseContext) || {};

  /**
   * Note, we don't need 2nd & 3rd positional returns from this hook,
   * take care not to break this by omitting them.
   */
  const [updateProfile, , updateProfileError] = useUpdateProfile(firebaseAuth);

  /** ---------------------------------------------
   * Handle form submission
   * ----------------------------------------------- */

  const updateDisplayNameOnFormSubmission = useCallback(
    async ({ displayName }: FormDataShape) => {
      return updateProfile({ displayName });
    },
    [updateProfile]
  );

  return (
    <Box marginY="spacing5">
      <Box display="grid" gridTemplateColumns={GRID_LAYOUT} gap="spacing3">
        <Box as="header">
          <Box as="h1" marginTop="none">
            Update your profile
          </Box>

          <Box as="p">
            You need a display name to access or interact with some projects.
            Your personal information is stored with Firebase.{" "}
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
            handleFormSubmission={updateDisplayNameOnFormSubmission}
            submitButtonText="Update profile"
            disabled={!user}
          >
            <FormInput
              errorMessage="Please ensure you have entered a valid name."
              required
              name="displayName"
              label="Display name"
              id="display name"
              placeholder="e.g. John Doe"
              type="text"
              autoComplete="name"
              disabled={!user}
            />
          </Form>

          {/** --------------------------------------------
           * Render auth errors
           * ----------------------------------------------- */}

          {updateProfileError && (
            <InputErrorMessage message="Sorry, there was an error. Please reload the page and try again." />
          )}
        </Box>
      </Box>
    </Box>
  );
}
