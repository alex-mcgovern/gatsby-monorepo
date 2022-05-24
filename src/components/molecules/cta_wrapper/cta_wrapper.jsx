import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/button/button";

export default function CTAWrapper({ placeholderProp }) {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}

CTAWrapper.propTypes = {
  placeholderProp: PropTypes.string,
};

CTAWrapper.defaultProps = {
  placeholderProp: null,
};
