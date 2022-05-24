import React from "react";
import PropTypes from "prop-types";
import Section from "../../section/section";
import InstaGridItem from "../insta_grid_item/insta_grid_item";
import * as classes from "./insta_grid_small.module.scss";

function InstaGridSmall({ images }) {
  if (images.length > 0) {
    return (
      <Section>
        <h3>I've also been known to dabble in design, painting and 3D...</h3>
        <div className={classes.grid}>
          {images?.length > 0 &&
            images.map((wrappedImage) => {
              return <InstaGridItem wrappedImage={wrappedImage} />;
            })}
        </div>
      </Section>
    );
  }
  return null;
}

InstaGridSmall.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})),
};

InstaGridSmall.defaultProps = {
  images: [],
};

export default InstaGridSmall;
