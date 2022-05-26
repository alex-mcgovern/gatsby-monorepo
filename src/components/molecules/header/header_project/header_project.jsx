import * as React from "react";
import PropTypes from "prop-types";
import AlternatingLayout from "../../../atoms/alternating_layout/alternating_layout.tsx";
import LayoutSectionInner from "../../../layout/layout_section_inner/layout_section_inner";
import LayoutSectionOuter from "../../../layout/layout_section_outer/layout_section_outer";

export default function HeaderProject({ doc }) {
  return (
    <LayoutSectionOuter>
      <AlternatingLayout ratio="2_1">
        <LayoutSectionInner hasArrowsBottom hasArrowsTop hasOutline hasPadding>
          <section
            dangerouslySetInnerHTML={{ __html: doc }}
            itemProp="articleBody"
          />
        </LayoutSectionInner>

        <LayoutSectionInner
          hasArrowsBottom
          hasArrowsTop
          hasOutline
          hasBackground
        />
      </AlternatingLayout>
    </LayoutSectionOuter>
  );
}

HeaderProject.propTypes = {
  doc: PropTypes.shape({
    html: PropTypes.string,
  }).isRequired,
};
