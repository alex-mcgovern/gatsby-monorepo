import React, { useContext } from "react";
import { FirebaseAuthContext } from "../../../context/firebase_context";
import { Box } from "../../atoms/box/box";
import { Button } from "../../atoms/button/button";
import { Loader } from "../../atoms/loader/Loader";
import { Typography } from "../../atoms/typography/typography";

const AuthenticatedPage = ({ component: Component, location, ...rest }) => {
  const { user, firebaseAuthLoading } = useContext(FirebaseAuthContext);
  const isLoggedIn = !!user;

  if (!!user) {
    return <Component {...rest} />;
  }

  if (firebaseAuthLoading) {
    return (
      <Loader
        size="3x"
        customisation={{
          width: "100%",
          minHeight: "75vh",
        }}
      />
    );
  }
  return (
    <Box as="header" customisation={{}}>
      <Typography as="h1">You need to be signed in</Typography>

      <Typography as="p">
        <b>Note:</b> You must have an account in order to use the demo.
      </Typography>

      <Box customisation={{ display: "flex", gap: "spacing1" }}>
        <Button
          variant={{
            appearance: "primary",
          }}
          title={isLoggedIn ? "Go to demo" : "Log in"}
          to={isLoggedIn ? "/projects/firebase-kanban/demo" : "/login"}
        />
        <Button
          variant={{
            appearance: "secondary",
          }}
          title={"Read blog post"}
          to={"/blog"}
        />
      </Box>
    </Box>
  );
};

export default AuthenticatedPage;
