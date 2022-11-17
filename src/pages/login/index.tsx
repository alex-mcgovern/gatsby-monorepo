import React, { useContext, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { BoxNew } from "../../components/atoms/box_new/box_new";
import { Button } from "../../components/atoms/button/button";
import { Input } from "../../components/atoms/input/input";
import { FirebaseAuthContext } from "../../context/firebase_context";

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
      <BoxNew marginY="spacing5">
        <BoxNew
          display="grid"
          gridTemplateColumns={{
            mobile: "1x",
            tablet: "2x",
          }}
          gap="spacing3"
        >
          <BoxNew as="header">
            <BoxNew
              as="h1"
              customisation={{
                marginTop: "none",
              }}
            >
              Login
            </BoxNew>

            <BoxNew as="p">
              An account is required to access or interact with some projects.
              Authentication is handled with Firebase.
            </BoxNew>
          </BoxNew>
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
              <BoxNew as="p" customisation={{ color: "semantic_red_bg" }}>
                {errorMessage}
              </BoxNew>
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
        </BoxNew>
      </BoxNew>
    </>
  );
};

export default Login;
