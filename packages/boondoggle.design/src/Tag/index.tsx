import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import { Link } from "gatsby";
import type { GetSprinklesArgs } from "../__css__/getSprinkles.css";
import { getSprinkles } from "../__css__/getSprinkles.css";
import { getFocusRingStyles } from "../__css__/recipes/get_focus_ring_styles.css";
import { resetButton } from "../__css__/resets/reset_button.css";
import type { TTagVariants } from "./tag.css";
import { getTagStyle } from "./tag.css";
import TagInnerContent from "./tag_inner_content";

export interface TagCustomisation {
  display?: GetSprinklesArgs["display"];
  width?: GetSprinklesArgs["width"];
  marginTop?: GetSprinklesArgs["marginTop"];
  marginBottom?: GetSprinklesArgs["marginBottom"];
  justifyContent?: GetSprinklesArgs["justifyContent"];
}

export interface TagProps {
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

export function Tag({
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
}: TagProps) {
  const isInternalLink = to && /^\/(?!\/)/.test(to);

  const tagStyle = clsx([
    resetButton,
    getTagStyle(variant),
    getSprinkles({
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
  if (onClick)
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

  return (
    <div className={tagStyle} id={id} {...rest}>
      <TagInnerContent
        iconLeading={iconLeading}
        iconTrailing={iconTrailing}
        title={title}
      />
    </div>
  );
}
