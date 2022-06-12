import React from "react";
import Box from "../../layout/box/box";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <Box margin="lg" padding="lg" outline="dashed">
      © {date} Alex McGovern.
    </Box>
  );
}

Footer.defaultProps = {
  placeholderProp: null,
};
