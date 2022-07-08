import React, { useContext, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Box } from "../../components/atoms/box/box";
import { Button } from "../../components/atoms/button/button";
import { Input } from "../../components/atoms/input/input";
import { Typography } from "../../components/atoms/typography/typography";
import { FirebaseAuthContext } from "../../context/firebase_context";
import { BOX_CUSTOMISATION_SECTION_SPACING } from "../../utils/shared_props/box_props";

const Register = () => {
  const { firebaseAuth } = useContext(FirebaseAuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(firebaseAuth);

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
    setFormValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));
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
              Register
            </Typography>

            <Typography as="p">
              I'll just need a few details to create an account. Authentication
              is handled with Firebase. Your data is stored and processed by
              Google on my behalf,{" "}
              <a href="https://firebase.google.com/support/privacy">
                here's their privacy policy
              </a>
              .
            </Typography>
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
            />
            {!!errorMessage && (
              <Typography as="p" customisation={{ color: "semantic_red" }}>
                {errorMessage}
              </Typography>
            )}
            {/* {!!error && (
              <Typography as="p" customisation={{ color: "semantic_red" }}>
                {error}
              </Typography>
            )} */}

            <Button type="submit" title="Register" isLoading={loading} />
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Register;
