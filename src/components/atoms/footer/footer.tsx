import React from "react";
import Box from "../../layout/box/box";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <Box marginY="spacing9" marginY="spacing9" outline="dashed">
      © {date} Alex McGovern.
    </Box>
  );
}

Footer.defaultProps = {
  placeholderProp: null,
};
