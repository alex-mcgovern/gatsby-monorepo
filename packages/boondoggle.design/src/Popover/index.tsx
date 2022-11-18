import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import * as RadixPopover from "@radix-ui/react-popover";
import { Box } from "../Box";
import { Card } from "../Card";
import { Icon } from "../Icon";
import * as styles from "./popover.css";

interface IPopover {
  popoverText: string;
  icon: IconProp;
}

export default function Popover({
  popoverText,
  icon = faInfoCircle,
}: IPopover) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger className={styles.popoverTrigger}>
        <Icon icon={icon} />
      </RadixPopover.Trigger>

      <RadixPopover.Content sideOffset={1} side="top">
        <Card maxWidth="gridSpan5" padding="spacing3">
          <Box>{popoverText}</Box>
        </Card>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
}
