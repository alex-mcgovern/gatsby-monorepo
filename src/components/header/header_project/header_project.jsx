import * as React from "react";
import AlternatingLayout from "../../alternating_layout/alternating_layout";
import SectionContent from "../../section/section_content/section_content";
import SectionOuter from "../../section/section_outer/section_outer";

export default function HeaderProject({ doc }) {
  return (
    <SectionOuter>
      <AlternatingLayout ratio="2_1">
        <SectionContent hasArrowsBottom hasArrowsTop hasOutline hasPadding>
          <section
            dangerouslySetInnerHTML={{ __html: doc }}
            itemProp="articleBody"
          />
        </SectionContent>

        <SectionContent hasArrowsBottom hasArrowsTop hasOutline hasBackground />
      </AlternatingLayout>
    </SectionOuter>
  );
}
