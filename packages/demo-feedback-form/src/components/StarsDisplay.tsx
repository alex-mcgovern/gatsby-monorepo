import React from "react";
import type { IconProps } from "@alexmcgovern/boondoggle.design";
import { Box, Icon, getSprinkles } from "@alexmcgovern/boondoggle.design";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";

const STAR_CLASS_NAMES = getSprinkles({
  color: "accent_text_lowContrast",
  flexShrink: "0",
});

interface StarsDisplayProps {
  rating: number;
}

export function StarsDisplay({ rating }: StarsDisplayProps) {
  return (
    <Box display="flex">
      {Array.from({ length: 5 }, (_, index) => {
        const starIcon: IconProps["icon"] =
          rating > index ? faStarSolid : faStarRegular;
        return (
          <Icon
            size="lg"
            className={STAR_CLASS_NAMES}
            key={index}
            icon={starIcon}
          />
        );
      })}
    </Box>
  );
}
