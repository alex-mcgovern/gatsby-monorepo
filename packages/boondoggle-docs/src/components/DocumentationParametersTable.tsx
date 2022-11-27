// Adapted from https://github.com/transitive-bullshit/react-docgen-parameters-table
import React from "react";
import { Box, Tooltip } from "@alexmcgovern/boondoggle.design";
import { checkArrayHasLength } from "@alexmcgovern/utils";
import { getPropType } from "../utils/get_prop_type";

interface IDocumentationParametersTable {
  /** Component parameters transformed into AST by react-docgen */
  parameters: undefined;
}

export function DocumentationParametersTable({
  parameters,
  ...rest
}: IDocumentationParametersTable) {
  if (checkArrayHasLength(parameters)) {
    return (
      <>
        {parameters.map((parameter) => {
          if (checkArrayHasLength(parameter.properties)) {
            return (
              <Box as="section" marginY="spacing4" key={parameter.type}>
                <Box as="h3">Props</Box>

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
                        checkArrayHasLength(property.properties) &&
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
                            <Box
                              as="code"
                              variant={{
                                color: "accent_text_lowContrast",
                                backgroundColor: "accent_secondary_1",
                              }}
                            >
                              {property.name}
                              {!property.optional && "*"}
                            </Box>
                            {property.description && (
                              <Tooltip popoverText={property.description} />
                            )}
                          </td>

                          <td>
                            <Box as="code">
                              {property.type || getPropType(property.kind)}
                            </Box>
                            {subProperties?.length > 0 && (
                              <Tooltip
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
}

DocumentationParametersTable.defaultParameters = {
  placeholderProp: null,
};
