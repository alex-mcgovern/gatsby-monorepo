import React from "react";

interface ReadingListItemProps {
  title?: string;
}

export default function ReadingListItem({
  title
}: ReadingListItemProps) {
  return <div>{title}</div>;
}

ReadingListItem.defaultProps = {
  title: null,
};
