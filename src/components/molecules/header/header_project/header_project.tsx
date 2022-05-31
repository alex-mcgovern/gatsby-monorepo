import * as React from "react";
import AlternatingLayout from "../../../atoms/alternating_layout/alternating_layout";
import Box from "../../../layout/box/box";

interface HeaderProjectProps {
  doc: string;
}

export default function HeaderProject({ doc }: HeaderProjectProps) {
  return (
    <Box margin="lg">
      <AlternatingLayout ratio="2_1">
        <Box outline="dashed" padding="lg">
          <section
            dangerouslySetInnerHTML={{ __html: doc }}
            itemProp="articleBody"
          />
        </Box>

        <Box outline="dashed" background="crosshatch" />
      </AlternatingLayout>
    </Box>
  );
}
