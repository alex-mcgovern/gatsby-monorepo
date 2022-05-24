import React from "react";
import PropTypes from "prop-types";

export default function ReadingListItem({ title }) {
  return <div>{title}</div>;
}

ReadingListItem.propTypes = {
  title: PropTypes.string,
};

ReadingListItem.defaultProps = {
  title: null,
};
