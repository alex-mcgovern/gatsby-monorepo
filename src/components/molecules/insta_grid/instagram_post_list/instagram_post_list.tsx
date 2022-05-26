import React from "react";
import Button from "../../../atoms/button/button/button";
import ButtonWrapper from "../../../atoms/button/button_wrapper/button_wrapper";
import ResponsiveGrid from "../../../atoms/responsive_grid/responsive_grid";
import LayoutSectionOuter from "../../../layout/layout_section_outer/layout_section_outer";
import InstaGridItem from "../insta_grid_item/insta_grid_item";

interface InstagramPostListProps {
  images: {}[];
}

export default function InstagramPostList({ images }: InstagramPostListProps) {
  if (images.length > 0) {
    return (
      <LayoutSectionOuter>
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
      </LayoutSectionOuter>
    );
  }
  return null;
}
