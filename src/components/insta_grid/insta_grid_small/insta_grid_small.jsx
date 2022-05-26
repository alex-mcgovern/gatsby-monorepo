import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/button/button/button";
import ButtonWrapper from "../../atoms/button/button_wrapper/button_wrapper";
import ResponsiveGrid from "../../atoms/responsive_grid/responsive_grid";
import SectionOuter from "../../section/section_outer/section_outer";
import InstaGridItem from "../insta_grid_item/insta_grid_item";
import * as classes from "./insta_grid_small.module.scss";

function InstaGridSmall({ images }) {
  if (images.length > 0) {
    return (
      <SectionOuter>
        <h3>I've also been known to dabble in design, painting and 3D...</h3>
        <ResponsiveGrid split={3}>
          {images?.length > 0 &&
            images.map((wrappedImage) => {
              return <InstaGridItem wrappedImage={wrappedImage} />;
            })}
        </ResponsiveGrid>
        <ButtonWrapper isCentered>
          <Button size="lg" to="/" title="Check me out on Instagram" />
        </ButtonWrapper>
      </SectionOuter>
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
