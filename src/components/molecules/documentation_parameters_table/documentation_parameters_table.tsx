// Adapted from https://github.com/transitive-bullshit/react-docgen-parameters-table
import React from "react";
import { Box } from "../../atoms/box/box";
import Popover from "../../atoms/popover/popover";
import { Typography } from "../../atoms/typography/typography";
import getPropType from "./helper_functions/get_prop_type";

// import { Tooltip } from "./tooltip/tooltip";

interface IDocumentationParametersTable {
  /** Component parameters transformed into AST by react-docgen */
  parameters: undefined;
}

export const DocumentationParametersTable = ({
  parameters,
  ...rest
}: IDocumentationParametersTable) => {
  if (parameters && parameters.length > 0) {
    return (
      <>
        {parameters.map((parameter) => {
          if (parameter.properties && parameter.properties.length > 0) {
            return (
              <Box
                as="section"
                customisation={{ marginY: "spacing4" }}
                key={parameter.type}
              >
                {/* —————————————————————————————————————————————————————————————————————————————
                 *      SECTION HEADING
                 * ——————————————————————————————————————————————————————————————————————————————— */}

                <Typography as="h3">Props</Typography>

                {/* —————————————————————————————————————————————
                 *      TABLE
                 * ——————————————————————————————————————————————— */}
                <Box as="table" customisation={{ width: "100%" }} {...rest}>
                  {/* —————————————————————
                   *      TABLE HEADER
                   * ——————————————————————— */}
                  <Box as="thead">
                    <Box as="tr">
                      <Box as="th">Property</Box>
                      <Box as="th">Type</Box>
                      <Box as="th">Default</Box>
                    </Box>
                  </Box>

                  {/* —————————————————————
                   *      TABLE BODY
                   * ——————————————————————— */}
                  <Box as="tbody">
                    {parameter.properties.map((property) => {
                      const subProperties =
                        property.properties?.length > 0 &&
                        property.properties
                          .map((subProperty) => {
                            return (
                              subProperty.value ||
                              subProperty.name ||
                              subProperty.type
                            );
                          })
                          .filter(Boolean);

                      return (
                        <Box as="tr" key={property.name}>
                          {/* PROP NAME */}
                          <Box as="td">
                            <Typography
                              as="code"
                              customisation={{
                                backgroundColor: "accent_bg_3",
                                color: "accent_fg_1",
                              }}
                            >
                              {property.name}
                              {!property.optional && "*"}
                            </Typography>
                            {property.description && (
                              <Popover popoverText={property.description} />
                            )}
                          </Box>

                          <Box as="td">
                            <Typography as="code">
                              {property.type || getPropType(property.kind)}
                            </Typography>
                            {subProperties?.length > 0 && (
                              <Popover
                                popoverText={subProperties.join(" | ")}
                              />
                            )}
                          </Box>

                          {!property.defaultValue ? (
                            <Box as="td">
                              <em>-</em>
                            </Box>
                          ) : (
                            <Box as="td">
                              {property.defaultValue.value === "''" ? (
                                <em>[Empty String]</em>
                              ) : (
                                property.defaultValue &&
                                property.defaultValue.value.replace(/'/g, "")
                              )}
                            </Box>
                          )}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            );
          }
          return null;
        })}
      </>
    );
  }
  return null;
};

DocumentationParametersTable.defaultParameters = {
  placeholderProp: null,
};
