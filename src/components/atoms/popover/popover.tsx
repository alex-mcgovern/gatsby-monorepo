import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RadixPopover from "@radix-ui/react-popover";
import { Box } from "../box/box";
import { Button } from "../button/button";
import { Typography } from "../typography/typography";
import * as styles from "./popover.css";

interface IPopover {
  popoverText: string;
}

export default function Popover({ popoverText }: IPopover) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger className={styles.popoverTrigger}>
        <FontAwesomeIcon icon="circle-info" />
      </RadixPopover.Trigger>

      <RadixPopover.Content
        sideOffset={1}
        side="top"
        // className={styles.popoverContent}
      >
        <Box
          customisation={{
            padding: "spacing2",
            backgroundColor: "neutral_bg_3",
            borderRadius: "sm",
            boxShadow: "shadowLight",
            maxWidth: "gridSpan5",
            border: "1px solid",
            borderColor: "neutral_ui_3",
          }}
        >
          <Typography>{popoverText}</Typography>
        </Box>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
}

Popover.defaultProps = {
  placeholderProp: null,
};
