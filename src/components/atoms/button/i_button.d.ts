import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TFunctionalClassNames } from "../../../styles/functional_classnames.css";

export interface IButton {
  /** Variant prop controlling button appearance. */
  appearance?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "primaryAccent"
    | "secondaryAccent";
  /** Utility-first style prop controlling css display property. */
  display?: TFunctionalClassNames["display"];
  /** Icon show on the left side of button. */
  iconLeading?: IconProp;
  /** Icon show on the right side of button. */
  iconTrailing?: IconProp;
  /** Used as the html ID. */
  id?: string;
  /** Allow for disabled state when controlled element. */
  isDisabled?: boolean;
  /** Click handler. */
  onClick?(...args: unknown[]): unknown;
  /** Variant controlling button size. */
  size?: TSizeProp;
  /** The string shown in the button. */
  title?: string | number;
  /** The string URI to link to. Supports relative and absolute URIs. */
  to?: string;
  /** Allow overriding html button type attribute. */
  type?: "submit" | "button";
  /** Utility-first style prop controlling css width property. */
  width?: TFunctionalClassNames["width"];
}
