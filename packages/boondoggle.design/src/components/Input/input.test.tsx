/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import type { InputProps } from ".";
import { Input } from ".";

const COMPONENT_NAME = "[input]";

const renderComponent = ({ ...props }: InputProps) => {
  return render(<Input {...props} />);
};

let component = null;

describe(COMPONENT_NAME, () => {
  describe(`Renders correctly`, () => {
    it("Renders title correctly", () => {
      component = renderComponent({
        name: "Test input",
        ariaAutocomplete: "none",
        ariaControls: "none",
        ariaLabelledby: "test",
        autoComplete: "off",
        id: "test_input",
        label: "This is the label",
        type: "text",
      });
      expect(
        component.getByText("This is the label", { exact: false })
      ).toBeTruthy();
    });
    it.skip("Matches snapshot", () => {
      //   expect(component).toMatchSnapshot();
    });
  });
});
