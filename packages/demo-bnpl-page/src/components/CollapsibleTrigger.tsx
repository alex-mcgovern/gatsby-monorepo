import React from "react";
import type { IconProps } from "@alexmcgovern/boondoggle.design";
import { Box, Button, Icon } from "@alexmcgovern/boondoggle.design";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface CollapsibleTriggerProps {
  title: string;
  icon: IconProps["icon"];
}

export function CollapsibleTrigger({
  title,
  icon,
  ...rest
}: CollapsibleTriggerProps) {
  return (
    <Box
      width="100%"
      padding="spacing3"
      gap="spacing2"
      background="neutral_background_raised"
      marginY="spacing1"
      justifyContent="space-between"
      display="flex"
      border="neutral_nonInteractive"
      borderRadius="sm"
    >
      <Button appearance="tertiary" iconLeading={icon} {...rest}>
        {title}
      </Button>
      <Icon icon={faAngleDown} />
    </Box>
  );
}
