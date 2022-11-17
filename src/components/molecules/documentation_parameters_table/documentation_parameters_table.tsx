// Adapted from https://github.com/transitive-bullshit/react-docgen-parameters-table
import React from "react";
import checkHasLength from "../../../utils/map_if_has_length/map_if_has_length";
import { BoxNew } from "../../atoms/box_new/box_new";
import Popover from "../../atoms/popover/popover";
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
              <BoxNew as="section" marginY="spacing4" key={parameter.type}>
                <BoxNew as="h3">Props</BoxNew>

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
                            <BoxNew
                              as="code"
                              variant={{
                                color: "accent_fg_1",
                                backgroundColor: "accent_ui_1",
                              }}
                            >
                              {property.name}
                              {!property.optional && "*"}
                            </BoxNew>
                            {property.description && (
                              <Popover popoverText={property.description} />
                            )}
                          </td>

                          <td>
                            <BoxNew as="code">
                              {property.type || getPropType(property.kind)}
                            </BoxNew>
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
              </BoxNew>
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
