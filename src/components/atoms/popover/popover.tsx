import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RadixPopover from "@radix-ui/react-popover";
import { BoxNew } from "../box_new/box_new";
import { Card } from "../card/card";
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
        <Card maxWidth="gridSpan5" padding="spacing3">
          <BoxNew>{popoverText}</BoxNew>
        </Card>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
}

Popover.defaultProps = {
  placeholderProp: null,
};
