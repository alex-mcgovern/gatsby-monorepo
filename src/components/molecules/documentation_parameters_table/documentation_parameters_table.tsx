// Adapted from https://github.com/transitive-bullshit/react-docgen-parameters-table
import React from "react";
import checkHasLength from "../../../utils/map_if_has_length/map_if_has_length";
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
  if (checkHasLength(parameters)) {
    return (
      <>
        {parameters.map((parameter) => {
          if (checkHasLength(parameter.properties)) {
            return (
              <Box
                as="section"
                customisation={{ marginY: "spacing4" }}
                key={parameter.type}
              >
                <Typography as="h3">Props</Typography>

                <table {...rest}>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Default</th>
                    </tr>
                  </thead>

                  <tbody>
                    {parameter.properties.map((property) => {
                      const subProperties =
                        checkHasLength(property.properties) &&
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
                        <tr key={property.name}>
                          <td>
                            <Typography
                              as="code"
                              variant={{
                                color: "accent_fg_1",
                                backgroundColor: "accent_ui_1",
                              }}
                            >
                              {property.name}
                              {!property.optional && "*"}
                            </Typography>
                            {property.description && (
                              <Popover popoverText={property.description} />
                            )}
                          </td>

                          <td>
                            <Typography as="code">
                              {property.type || getPropType(property.kind)}
                            </Typography>
                            {subProperties?.length > 0 && (
                              <Popover
                                popoverText={subProperties.join(" | ")}
                              />
                            )}
                          </td>

                          {!property.defaultValue ? (
                            <td>
                              <em>-</em>
                            </td>
                          ) : (
                            <td>
                              {property.defaultValue.value === "''" ? (
                                <em>[Empty String]</em>
                              ) : (
                                property.defaultValue &&
                                property.defaultValue.value.replace(/'/g, "")
                              )}
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
