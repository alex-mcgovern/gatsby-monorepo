import * as React from "react";
import AlternatingLayout from "../../../atoms/alternating_layout/alternating_layout";
import LayoutSectionInner from "../../../layout/layout_section_inner/layout_section_inner";
import LayoutSectionOuter from "../../../layout/layout_section_outer/layout_section_outer";

interface HeaderProjectProps {
  doc: string;
}

export default function HeaderProject({ doc }: HeaderProjectProps) {
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
