import React, { useContext, useState } from "react";
import { Box, Button, Input } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

function Login() {
  const { firebaseAuth, user, firebaseAuthLoading } =
    useContext(FirebaseContext);
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(firebaseAuth);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const isLoggedIn = !!user;

  function handleSubmit(e) {
    e.preventDefault();

    return signInWithEmailAndPassword(formValues.email, formValues.password);
  }

  let loginButtonTitle = "Log in";
  if (loading) {
    loginButtonTitle = "Logging in";
  }
  if (user) {
    loginButtonTitle = "Logged in";
  }

  function handleInputChange(e) {
    e.persist();
    setErrorMessage("");
    setFormValues((currentValues) => {
      return {
        ...currentValues,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <Box marginY="spacing5">
      <Box
        display="grid"
        gridTemplateColumns={{
          mobile: "1x",
          tablet: "2x",
        }}
        gap="spacing3"
      >
        <Box as="header">
          <Box as="h1" marginTop="none">
            Login
          </Box>

          <Box as="p">
            An account is required to access or interact with some projects.
            Authentication is handled with Firebase.
          </Box>
        </Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <Input
              required
              isLabelVisible
              //   value={formValues.email}
              name="email"
              label="Email address"
              id="email"
              onChange={handleInputChange}
              placeholder="john@doe.com"
              type="email"
              isDisabled={!!user}
            />
            <Input
              required
              isLabelVisible
              //   value={formValues.password}
              id="password"
              label="Password"
              name="password"
              onChange={handleInputChange}
              placeholder="Alphanumeric, > 6 characters"
              type="password"
              isDisabled={!!user}
            />
            {!!errorMessage && (
              <Box as="p" color="semantic_red_bg">
                {errorMessage}
              </Box>
            )}
            <Button
              type="submit"
              title={loginButtonTitle}
              iconTrailing={faAngleRight}
              disabled={firebaseAuthLoading || isLoggedIn}
            >
              {loginButtonTitle}
            </Button>
          </form>
          {!isLoggedIn && (
            <Button
              size="sm"
              appearance="uiLink"
              isLoading={!!loading}
              to="/register"
              as={Link}
            >
              Register an account
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
