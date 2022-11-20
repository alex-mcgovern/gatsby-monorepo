import React, { useMemo } from "react";
import { countryToAlpha2 } from "country-to-iso";
import { Box } from "~components/box/box";
import { SvgFlagIcon } from "~components/svg/svg_flag_icon/svg_flag_icon";
import type { DownshiftListItemInnerProps } from "../DownshiftListItem";

export function DownshiftListItemInnerFlagIcon({
  item,
}: DownshiftListItemInnerProps) {
  const isoCode = useMemo(() => {return countryToAlpha2(item.label)}, [item.label]);

  if (!isoCode) return null;

  return (
    <Box
      display="flex"
      gap="spacing1"
      alignItems="center"
    >
      <SvgFlagIcon
        countryCode={isoCode}
        height="spacing2"
        width="spacing3"
        // marginRight="spacing1"
      />
      {item.label}
    </Box>
  );
}
