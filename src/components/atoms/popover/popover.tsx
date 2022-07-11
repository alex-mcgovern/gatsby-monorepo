import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RadixPopover from "@radix-ui/react-popover";
import { Box } from "../box/box";
import { Button } from "../button/button";
import { Card } from "../card/card";
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

      <RadixPopover.Content sideOffset={1} side="top">
        <Card
          customisation={{
            maxWidth: "gridSpan5",
            padding: "spacing3",
          }}
        >
          <Typography>{popoverText}</Typography>
        </Card>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
}

Popover.defaultProps = {
  placeholderProp: null,
};
