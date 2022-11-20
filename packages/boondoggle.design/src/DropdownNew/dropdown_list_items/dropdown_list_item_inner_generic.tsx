import React from "react";
import type { DownshiftListItemInnerProps } from "../DownshiftListItem";

export function DownshiftListItemInnerGeneric({
  item,
}: DownshiftListItemInnerProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{item.label}</>;
}
