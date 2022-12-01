import React from "react";
import type { IconProps } from "@alexmcgovern/boondoggle.design";
import { Button } from "@alexmcgovern/boondoggle.design";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface CollapsibleTriggerProps {
  title: string;
  icon: IconProps["icon"];
}

export function CollapsibleTrigger({ title, icon }: CollapsibleTriggerProps) {
  return (
    <Button
      appearance="tertiary"
      width="100%"
      padding="spacing3"
      gap="spacing2"
      background="neutral_background_raised"
      marginY="spacing1"
      iconLeading={icon}
      iconTrailing={faAngleDown}
    >
      {title}
    </Button>
  );
}
