import React, { useContext, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Box } from "../../components/atoms/box/box";
import { Button } from "../../components/atoms/button/button";
import { Input } from "../../components/atoms/input/input";
import { Typography } from "../../components/atoms/typography/typography";
import { FirebaseAuthContext } from "../../context/firebase_context";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../utils/shared_props/box_props";

const Login = () => {
  const { firebaseAuth, user, firebaseAuthLoading } =
    useContext(FirebaseAuthContext);
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
  if (!!user) {
    loginButtonTitle = "Logged in";
  }

  function handleInputChange(e) {
    e.persist();
    setErrorMessage("");
    setFormValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        <Box
          customisation={{
            display: "grid",
            gridTemplateColumns: {
              mobile: "1x",
              tablet: "2x",
            },
            gap: "spacing3",
          }}
        >
          <Box as="header">
            <Typography
              as="h1"
              customisation={{
                marginTop: "none",
              }}
            >
              Login
            </Typography>

            <Typography as="p">
              An account is required to access or interact with some projects.
              Authentication is handled with Firebase.
            </Typography>
          </Box>
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
              <Typography as="p" customisation={{ color: "semantic_red_bg" }}>
                {errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              title={loginButtonTitle}
              isLoading={firebaseAuthLoading}
              isDisabled={isLoggedIn}
            />
            {!isLoggedIn && (
              <Button
                variant={{ appearance: "tertiary", size: "sm" }}
                title="Register an account"
                isLoading={!!loading}
                to="/register"
              />
            )}
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
