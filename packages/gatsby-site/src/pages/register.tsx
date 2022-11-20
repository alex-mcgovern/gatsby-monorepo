import React, { useContext, useState } from "react";
import { Box, Button, Input } from "@alexmcgovern/boondoggle.design";
import { FirebaseContext } from "@alexmcgovern/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function Register() {
  const { firebaseAuth } = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(firebaseAuth);

  const isLoggedIn = !!user;

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  if (error) {
    console.log(error);
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

  function handleSubmit(e) {
    e.preventDefault();
    if (formValues.password === formValues.confirmPassword) {
      createUserWithEmailAndPassword(formValues.email, formValues.password);
    } else {
      setErrorMessage("Password and Confirm Password fields must match");
    }
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
            Register
          </Box>

          <Box as="p">
            I'll just need a few details to create an account. Authentication is
            handled with Firebase. Your data is stored and processed by Google
            on my behalf,{" "}
            <a href="https://firebase.google.com/support/privacy">
              here's their privacy policy
            </a>
            .
          </Box>
        </Box>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleInputChange}
            placeholder="john@doe.com"
            id="email"
            label="Email address"
            type="email"
            name="email"
            required
            isLabelVisible
            disabled={isLoggedIn}
          />
          <Input
            onChange={handleInputChange}
            placeholder="6 or more characters"
            type="password"
            name="password"
            id="password"
            label="Password"
            required
            isLabelVisible
            disabled={isLoggedIn}
          />
          <Input
            onChange={handleInputChange}
            placeholder="Retype your password"
            type="password"
            required
            isLabelVisible
            name="confirmPassword"
            label="Confirm password"
            id="confirmPassword"
            disabled={isLoggedIn}
          />
          {!!errorMessage && (
            <Box as="p" variant={{ color: "semantic_red_bg" }}>
              {errorMessage}
            </Box>
          )}
          {/* {!!error && (
              <Box as="p" color="semantic_red_bg">
                {error}
              </Box>
            )} */}

          <Button type="submit" isLoading={loading} disabled={isLoggedIn}>
            {isLoggedIn ? "Registered" : "Register"}
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
