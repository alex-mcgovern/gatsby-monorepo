import React from "react";
import { Box, Card, Icon } from "@alexmcgovern/boondoggle.design";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface HppCardWrapperProps {
  title: string;
  children: ReactNode;
}

export const HppCardWrapper = ({ title, children }: HppCardWrapperProps) => {
  return (
    <Card>
      <Box>
        <Box as="h1">{title}</Box>
        <Icon icon={faTimes} />
      </Box>
      {children}
    </Card>
  );
};
