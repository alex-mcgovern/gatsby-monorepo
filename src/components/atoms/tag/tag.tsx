import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import { Link } from "gatsby";
import {
  FunctionalClassNames,
  geFunctionalClassNames,
} from "../../../styles/functional_classnames.css";
import { getFocusRingStyles } from "../../../styles/recipes/get_focus_ring_styles.css";
import { resetButton } from "../../../styles/resets/reset_button.css";
import TagInnerContent from "./components/tag_inner_content/tag_inner_content";
import { TTagVariants, getTagStyle } from "./tag.css";

export interface TagCustomisation {
  display?: FunctionalClassNames["display"];
  width?: FunctionalClassNames["width"];
  marginTop?: FunctionalClassNames["marginTop"];
  marginBottom?: FunctionalClassNames["marginBottom"];
  justifyContent?: FunctionalClassNames["justifyContent"];
}

export interface ITag {
  /** Variant prop controlling tag appearance. Note: Auto-generated documentation for this is still a WIP, so variant styles are missing. */
  variant?: TTagVariants;
  /** Customisation exposes utility-first styles as props. */
  customisation?: TagCustomisation;
  /** FontAwesome icon shown on the left side of tag. */
  iconLeading?: IconProp;
  /** FontAwesome icon shown on the right side of tag. */
  iconTrailing?: IconProp;
  /** Used as the html ID. */
  id?: string;
  /** If `true`, the component is disabled. */
  isDisabled?: boolean;
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
  /** The string shown in the tag. */
  title?: string;
  /** The string URI to link to. Supports relative and absolute URIs. */
  to?: string;
}

export const Tag = ({
  to,
  title,
  id,
  customisation,
  iconLeading,
  iconTrailing,
  onClick,
  isDisabled,
  variant,
  ...rest
}: ITag) => {
  const isInternalLink = to && /^\/(?!\/)/.test(to);

  const tagStyle = classNames([
    resetButton,
    getTagStyle(variant),
    geFunctionalClassNames({
      ...customisation,
    }),
    getFocusRingStyles({}),
  ]);

  if (!isDisabled && to && isInternalLink) {
    return (
      <Link className={tagStyle} to={to} onClick={onClick} id={id} {...rest}>
        <TagInnerContent
          iconLeading={iconLeading}
          iconTrailing={iconTrailing}
          title={title}
        />
      </Link>
    );
  }
  if (!isDisabled && to && !isInternalLink) {
    return (
      <a className={tagStyle} href={to} onClick={onClick} id={id} {...rest}>
        <TagInnerContent
          iconLeading={iconLeading}
          iconTrailing={iconTrailing}
          title={title}
        />
      </a>
    );
  }
  return (
    <button
      className={tagStyle}
      disabled={isDisabled}
      onClick={onClick}
      id={id}
      type="button"
      {...rest}
    >
      <TagInnerContent
        iconLeading={iconLeading}
        iconTrailing={iconTrailing}
        title={title}
      />
    </button>
  );
};

Tag.defaultProps = {
  type: "tag",
};